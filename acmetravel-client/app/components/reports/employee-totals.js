import m from 'mithril';
import API from '../../components/api';
import {Spinner,Button} from '../../components/ui';

export const ReportsEmployeeTotals = {
    vm(){
        return {
            totals: m.prop('empty'),
            fetchEmployeeTotals: () => {
                return API.get('reports/users/expensesAll');
            }
        }
    },
    controller(){
        this.vm = ReportsEmployeeTotals.vm();
        this.vm.fetchEmployeeTotals().then(this.vm.totals).then(()=>m.redraw())
        this.print = () => {
            var tmpElemento = document.createElement('a');
            var data_type = 'data:application/vnd.ms-excel';
            var tabla_div = document.getElementById('tblReportPrint');

            var tabla_html = tabla_div.outerHTML.replace(/ /g, '%20');
            tmpElemento.href = data_type + ', ' + tabla_html;

            tmpElemento.download = 'Gastos_por_empleado.xls';
            tmpElemento.click();
        }
    },
    view(c){

        if(localStorage.getItem('user') == 'false' || localStorage.getItem('user') == null){
            m.route("/");
        }

        let totals = <Spinner />;

        if(c.vm.totals() != 'empty'){
            totals = (
                <div class="employee-totals">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <h3>Gastos por empleado</h3>
                            <table class="table" id="tblReportPrint" >
                               <thead>
                                 <th>CC</th><th>Nombre</th><th>Total Viajes Finalizados (COP)</th>
                               </thead>
                               <tbody>
                                {c.vm.totals().map((t) => {
                                    return <tr><td>{t.cc}</td><td>{t.names} {t.surnames}</td><td>${t.total}</td></tr>
                                })}
                               </tbody>
                            </table>
                            <Button onclick={c.print.bind(c)}><span class="pt-icon-standard pt-icon-print"></span> Imprimir</Button>
                            <br/><i>(Descarga en hoja de calculo)</i>
                        </div>
                    </div>
                </div>
            )      
        }
        return totals;
    }
}


export default ReportsEmployeeTotals;