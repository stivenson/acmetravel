import m from 'mithril';
import API from '../../components/api';
import {Spinner} from '../../components/ui';

export const ReportsCategories = {
    vm(){
        return {
            tags: m.prop('empty'),
            fetchImportantTags: () => {
                return API.get('reports/tagsexpenses/importantTags');
            }
        }
    },
    controller(){
        this.vm = ReportsCategories.vm();
        this.vm.fetchImportantTags().then(this.vm.tags).then(()=>m.redraw())
    },
    view(c){


        if(localStorage.getItem('user') == 'false' || localStorage.getItem('user') == null){
            m.route("/");
        }
        
        let tags = <Spinner />;

        if(c.vm.tags() != 'empty'){
            tags = (
                <div class="categories">
                    <div class="panel panel-default">
                        <div class="panel-body">
                        <h3>Categorías importantes</h3>
                            {c.vm.tags().map((t) => {
                                return (
                                    <div class="custom-padding"><span class="pt-tag pt-intent-success">{t.text}</span></div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )      
        }
        return tags;
    }
}


export default ReportsCategories;
