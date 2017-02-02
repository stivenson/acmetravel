import m from 'mithril';
import {Button} from '../ui';
import API from '../../components/api';

const ExpenseForm = {
    vm(){
        return {
            amount: m.prop(''),
            saving: m.prop(false)
        }
    },
    controller(){
        this.vm = ExpenseForm.vm();

        this.submit = (event) => {
            event.preventDefault();

            if(this.vm.saving()){
                return;
            }

            let payload = {
                amount: this.vm.amount(),
                travel_id: m.route.param("id")
            }
            this.vm.saving(true);
            API.post('expenses',payload).then((r) => this.vm.saving(false)).then(() => m.route('/dashboard'));
        }

        this.toReturn = () => {m.route('/dashboard')}
    },
    view(c){

        if(localStorage.getItem('user') == 'false' || localStorage.getItem('user') == null){
            m.route("/");
        }
        
        return (
            <div class="expense-form">
                <div class="customs-dashboard-forms">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <form onsubmit={c.submit.bind(c)} >

                                <label class="pt-label">
                                    Valor
                                    $<input
                                        type="number"
                                        class="pt-input pt-fill"
                                        name="amount"
                                        oninput={m.withAttr('value', c.vm.amount)}
                                        value={c.vm.amount()}
                                        placeholder="Solo números"
                                        required
                                    />
                                </label>

                                <div class="text-center">
                                    <Button type="button" intent="default" onclick={c.toReturn.bind(c)}>Atrás</Button>
                                    <Button loading={c.vm.saving()} type="submit">Guardar</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ExpenseForm;
