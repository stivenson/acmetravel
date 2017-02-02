import m from 'mithril';
import {Button} from '../ui';
import API from '../../components/api';

const TagsExpenseForm = {
    vm(){
        return {
            tag_id: m.prop(false),
            saving: m.prop(false),
            tags: m.prop([]),
            fetchTags: () => {
                return API.get('tags');
            }
        }
    },
    controller(){
        this.vm = TagsExpenseForm.vm();
        this.vm.fetchTags().then(this.vm.tags).then(()=>m.redraw());

        this.submit = (event) => {
            event.preventDefault();

            if(this.vm.saving()){
                return;
            }

            let payload = {
                tag_id: this.vm.tag_id(),
                expense_id: m.route.param("id")
            }
            this.vm.saving(true);
            API.post('tagsexpenses',payload).then((r) => this.vm.saving(false)).then(() => m.route('/dashboard'));
        }

        this.toReturn = () => {m.route('/dashboard')}
    },
    view(c){
        return (
            <div class="tagsexpense-form">
                <div class="customs-dashboard-forms">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <form onsubmit={c.submit.bind(c)} >
                                <div class="text-center">
                                    <label class="pt-select text-center">
                                        Seleccione etiqueta<br/><br/>
                                        <select name="tag_id" 
                                                onchange={m.withAttr('value', c.vm.tag_id)} 
                                                required>
                                            <option> -- </option>
                                            {c.vm.tags().map((t) => {
                                                return (
                                                    <option value={t.id} >{t.text}</option>
                                                );
                                            })}
                                        </select>
                                    </label>
                                </div>
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


export default TagsExpenseForm;
