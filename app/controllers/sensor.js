import Ember from 'ember';

function saveWithLoadingFlag(operation, loadingProperty = 'isLoading') {
    this.set(loadingProperty, true);
    return operation.finally(() => {
        this.set(loadingProperty, false);
    });
}

export default Ember.Controller.extend({
    isLoading: false,
    success: '',
    error: null,
    actions: {
        deleteParameter(parameter) {
            console.log("deleteParameter");
            console.log(parameter.name);
            let sensor = this.get("model");
            let params = sensor.data.parameters;
            params.removeObject(parameter);
            if (params.length == 0) {
                const parametersTemplate = { name: "", value: "" };
                params.pushObject(parametersTemplate);
            }
        },
        cancelSensorCanges() {
            this.controller.get("model").rollbackAttributes();
        },
        applySensorCanges() {
            console.log('apply:');
            let sensor = this.get('model');
            this.set('isLoading', true);
            return saveWithLoadingFlag.call(this, sensor.save())
                .then((result) => {
                    this.set('successMessage', 'Sensor has been saved.');
                })
                .catch(() => {
                    this.set('error', 'Sensor is too unruly to be saved.');
                });


        },
        applyAndSaveSensorCanges() {
            console.log('apply and save:');
            let answer = this.controller.get("model");
            answer.set('needSave', true);
            this.get('model').save();
        },
        addParameter(parameter) {
            console.log('add parameter:');
            
            const parametersTemplate = { name: "", value: "" };
            let sensor = this.get("model");
            let params = sensor.data.parameters;
            params.insertAt(params.indexOf(parameter)+1, parametersTemplate);

        }
    }
});
