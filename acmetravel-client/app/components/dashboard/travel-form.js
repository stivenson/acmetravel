import m from 'mithril';
import {Button} from '../ui';
import API from '../../components/api';

const TravelForm = {
    vm(){
        return {
            description: m.prop(''),
            finalized: m.prop(1),
            saving: m.prop(false)
        }
    },
    controller(){
        this.vm = TravelForm.vm();

        this.submit = (event) => {
            event.preventDefault();

            if(this.vm.saving()){
                return;
            }

            let payload = {
                description: this.vm.description(),
                finalized: this.vm.finalized(),
                user_id: m.route.param("id")
            }
            this.vm.saving(true);
            API.post('travels',payload).then((r) => this.vm.saving(false)).then(() => m.route('/dashboard'));
        }

        this.toReturn = () => {m.route('/dashboard')}
    },
    view(c){

        if(localStorage.getItem('user') == 'false' || localStorage.getItem('user') == null){
            m.route("/");
        }
        
        return (
            <div class="travel-form">
                <div class="customs-dashboard-forms">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <form onsubmit={c.submit.bind(c)} >

                                <label class="pt-label">
                                    Pequeña Descripción
                                    <input
                                        type="text"
                                        class="pt-input pt-fill"
                                        name="description"
                                        oninput={m.withAttr('value', c.vm.description)}
                                        value={c.vm.description()}
                                        placeholder=""
                                        required
                                    />
                                </label>

                                <div class="row">
                                    <div class="col-md-6">
                                        <label class="pt-label">
                                            ¿Viaje finalizado?
                                        </label>

                                        <label class="pt-control pt-radio pt-inline">
                                            <input type="radio" value="1" name="finalized"
                                                   onclick={m.withAttr('value', c.vm.finalized)}
                                                   checked={true}
                                                   />
                                            <span class="pt-control-indicator"></span>
                                            Si
                                        </label>

                                        <label class="pt-control pt-radio pt-inline">
                                            <input type="radio" value="0" name="finalized"
                                                   onclick={m.withAttr('value', c.vm.finalized)}
                                                   />
                                            <span class="pt-control-indicator"></span>
                                            No
                                        </label>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="text-center">
                                            <Button type="button" intent="default" onclick={c.toReturn.bind(c)}>Atrás</Button>
                                            <Button loading={c.vm.saving()} type="submit">Guardar</Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TravelForm;
