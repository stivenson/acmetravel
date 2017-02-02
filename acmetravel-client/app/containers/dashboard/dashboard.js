import m from 'mithril';
import {Spinner,Button} from '../../components/ui';
import API from '../../components/api';
import ReportsCategories from '../../components/reports/categories';
import ReportsEmployeeTotals from '../../components/reports/employee-totals';

const Dashboard = {
    vm(){
        return {
            currentRol: m.prop(JSON.parse(localStorage.getItem('user')).role_id),
            employees: m.prop('empty'),
            travels: m.prop('empty'),
            expenses: m.prop('empty'),
            tagsexpenses: m.prop('empty'),
            fetchEmployees: () => {
                return API.get('users');
            },
            fetchTravels: (idEmployee) => {
                return API.get(`travels/employees/${idEmployee}`); 
            },
            fetchExpenses: (idTravel) => {
                return API.get(`expenses/travels/${idTravel}`);
            },
            fetchTagsExpense: (idExpense) => {
                return API.get(`tagsexpenses/expenses/${idExpense}`);
            },
            fetchTags: () => {
                return API.get('tags');
            },
            fetchEmployee: (id) => {
                return API.get(`users/show/${id}`);
            },
            toEmployee: () => {m.route('/dashboard/employee')},
            toTravel: (idEmployee) => {m.route(`/dashboard/travel?id=${idEmployee}`)},
            toExpense: (idTravel) => {m.route(`/dashboard/expense?id=${idTravel}`)},
            toTagsExpense: (idExpense) => {m.route(`/dashboard/tagsexpense?id=${idExpense}`)},
            currentEmployee: m.prop(localStorage.getItem('idEmployee')),
            currentTravel: m.prop(localStorage.getItem('idTravel')),
            currentExpense: m.prop(localStorage.getItem('idExpense')) 
        }
    },
    controller(){

        if(localStorage.getItem('user') == false || localStorage.getItem('user') == null){
            m.route("/");
        }

        this.vm = Dashboard.vm();
        this.vm.fetchEmployees().then(this.vm.employees).then(()=>m.redraw()); 

        this.loadTravels = (idEmployee) => {
            this.vm.currentEmployee(idEmployee);
            localStorage.setItem('idEmployee',idEmployee);
            this.vm.fetchTravels(idEmployee).then(this.vm.travels).then(()=>m.redraw())
        }; 

        this.loadExpenses = (idTravel) => {
            this.vm.currentTravel(idTravel);
            localStorage.setItem('idTravel',idTravel);
            this.vm.fetchExpenses(idTravel).then(this.vm.expenses).then(()=>m.redraw())
        };

        this.loadTagsExpense = (idExpense) => {
            this.vm.currentExpense(idExpense);
            localStorage.setItem('idExpense',idExpense);
            this.vm.fetchTagsExpense(idExpense).then(this.vm.tagsexpenses).then(()=>m.redraw())
        }; 

        if(this.vm.currentEmployee() != false){
            this.loadTravels(this.vm.currentEmployee());
        }
        if(this.vm.currentTravel() != false){
            this.loadExpenses(this.vm.currentTravel());
        }
        if(this.vm.currentExpense() != false){
            this.loadTagsExpense(this.vm.currentExpense());
        }

        this.totalExpenses = () => {
            let total = 0;
            let arrEx = this.vm.expenses();
            for(let i in arrEx){
                total = total + arrEx[i].amount;
            }
            return total;   
        } 

        if(this.vm.currentRol() == 2){
            let user = JSON.parse(localStorage.getItem('user'));
            if(user == null){
                m.route("/");
            }
            this.loadTravels(user.id);
        }

    },
    view(c){

        let spin = <div class="text-center"><Spinner /></div>;
        let employees = spin;
        let travels = spin;
        let expenses = spin;
        let tagsexpenses = spin;

        if(c.vm.employees() != 'empty'){
            if(c.vm.employees().length < 1){
                employees = (
                    <div>
                        <br />
                        <br/>
                        <div class="text-center">
                            <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                            En el momento no hay empleados registrados
                        </div>
                        <br />
                        <br />
                    </div>
                )
            }else{
                employees = (
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th># CC</th>
                                <th>Nombre</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>

                            {c.vm.employees().map((e) => {
                                return (
                                    <tr>
                                        <td>{e.cc}</td>
                                        <td>{e.names} {e.surnames}</td>
                                        <td>
                                            <a onclick={c.loadTravels.bind(c,e.id)}>
                                                <span class="pt-icon-standard pt-icon-airplane"></span>
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })}

                            </tbody>
                        </table>
                    </div>
                ) 
            }
        }


        if(c.vm.travels() != 'empty'){
            if(c.vm.travels().length < 1){
                travels = (
                    <div>
                        <br />
                        <br/>
                        <div class="text-center">
                            <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                            No hay viajes registrados para el empleado seleccionado
                        </div>
                        <br />
                        <br />
                    </div>
                )
            }else{
                travels = (
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th>Descrip.</th>
                                <th>Finaliz.</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>

                            {c.vm.travels().map((t) => {
                                return (
                                    <tr>
                                        <td>{t.description.substring(0, 12)}...</td>
                                        <td>
                                            
                                            <span class={"pt-tag pt-intent-success "+(t.finalized?'':'hidden')}>Si</span>
                                            <span class={"pt-tag default "+(!t.finalized?'':'hidden')}>No</span>
                                        </td>
                                        <td>
                                            <a onclick={c.loadExpenses.bind(c,t.id)}>
                                                <span class="pt-icon-standard pt-icon-dollar"></span>
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })}

                            </tbody>
                        </table>
                    </div>
                ) 
            }
        }else{
            travels = (
                <div>
                    <br />
                    <br/>
                    <div class="text-center">
                        <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                        Debe seleccionar empleado
                    </div>
                    <br />
                    <br />
                </div>
            )
        }


        if(c.vm.expenses() != 'empty'){
            if(c.vm.expenses().length < 1){
                expenses = (
                    <div>
                        <br />
                        <br/>
                        <div class="text-center">
                            <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                            No hay gastos registrados para el viaje seleccionado
                        </div>
                        <br />
                        <br />
                    </div>
                )
            }else{
                expenses = (
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th>Valor(COP)</th>
                                <th>Fecha</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>

                            {c.vm.expenses().map((t) => {
                                return (
                                    <tr>
                                        <td>${t.amount}</td>
                                        <td>{t.created_at.substring(0,10)}</td>
                                        <td>
                                            <a onclick={c.loadTagsExpense.bind(c,t.id)}>
                                                <span class="pt-icon-standard pt-icon-tag"></span>
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                        <div class="text-center">
                        Total Gastos <big><b>$ {c.totalExpenses()}</b></big>
                        </div>
                    </div>
                ) 
            }
        }else{
            expenses = (
                <div>
                    <br />
                    <br/>
                    <div class="text-center">
                        <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                        Debe seleccionar viaje
                    </div>
                    <br />
                    <br />
                </div>
            )
        }


        if(c.vm.tagsexpenses() != 'empty'){
            if(c.vm.tagsexpenses().length < 1){
                tagsexpenses = (
                    <div>
                        <br />
                        <br/>
                        <div class="text-center">
                            <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                            No hay etiquetas registradas para el gasto seleccionado
                        </div>
                        <br />
                        <br />
                    </div>
                )
            }else{
                tagsexpenses = (
                    <div >
                        {c.vm.tagsexpenses().map((t) => {
                            return (
                                <div class="custom-padding"><span class="pt-tag pt-intent-success">{t.text}</span></div>
                            )
                        })}
                    </div>
                ) 
            }
        }else{
            tagsexpenses = (
                <div>
                    <br />
                    <br/>
                    <div class="text-center">
                        <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                        Debe seleccionar gasto
                    </div>
                    <br />
                    <br />
                </div>
            )
        }

        let title_employee;


        if(c.vm.currentEmployee() != false && c.vm.employees() != 'empty'){
            title_employee = (
                <div class="text-center">
                    <h1>
                    {(() => {
                        let employee = c.vm.employees().filter(em => em.id == c.vm.currentEmployee())
                        if(employee.length > 0){
                            return employee[0].names+ ' '+employee[0].surnames;
                        }
                    })()}
                    </h1>
                    <br/>
                </div>
            )  
        }

        let contentAdminPanels1, contentAdminPanels2;

        if(c.vm.currentRol() == 1){
            contentAdminPanels1 = (

                <div class="col-md-6">
                    <div class="text-center"><h3>Empleados</h3></div>
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <Button fill large type="button" onclick={c.vm.toEmployee.bind(c.vm)}><span class="pt-icon-standard pt-icon-add"></span> Nuevo empleado</Button>
                            <br/>
                            <br/>
                            {employees}
                        </div>
                    </div>
                </div>
            )

            contentAdminPanels2 = (
                <div class="col-md-6">
                    <div class="text-center"><h3> <span class="pt-icon-standard pt-icon-airplane"></span> Viajes de Empleado</h3></div>
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <span class={c.vm.currentEmployee() == false ? ' hidden ':' '} ><Button fill large type="button" onclick={c.vm.toTravel.bind(c.vm,c.vm.currentEmployee())} ><span class="pt-icon-standard pt-icon-add"></span> Nuevo viaje</Button></span>
                            <br/>
                            <br/>
                            {travels}
                        </div>
                    </div>
                </div>
            )
        } 

        let contentEmployeePanels0, contentEmployeePanels1, contentEmployeePanels2;

        if(c.vm.currentRol() == 2){



            contentEmployeePanels0 = (

                <div class="col-md-4">
                    <div class="text-center"><h3> <span class="pt-icon-standard pt-icon-airplane"></span> Viajes de Empleado</h3></div>
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <span class={c.vm.currentEmployee() == false ? ' hidden ':' '} ><Button fill large type="button" onclick={c.vm.toTravel.bind(c.vm,c.vm.currentEmployee())} ><span class="pt-icon-standard pt-icon-add"></span> Nuevo viaje</Button></span>
                            <br/>
                            <br/>
                            {travels}
                        </div>
                    </div>
                </div>
            )
            
            contentEmployeePanels1 = (

                <div class="col-md-4">
                    <div class="text-center"><h3> <span class="pt-icon-standard pt-icon-dollar"></span> Gastos de Viaje</h3></div>
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <span class={c.vm.currentTravel() == false ? ' hidden ':' '} ><Button fill large type="button" onclick={c.vm.toExpense.bind(c.vm,c.vm.currentTravel())} ><span class="pt-icon-standard pt-icon-add"></span> Nuevo Gasto</Button></span>
                            <br/>
                            <br/>
                            {expenses}
                        </div>
                    </div>
                </div>

            )


            contentEmployeePanels2 = ( 
                <div class="col-md-4">
                    <div class="text-center"><h3> <span class="pt-icon-standard pt-icon-tag"></span> Etiquetas de gasto</h3></div>

                    <div class="panel panel-default">
                        <div class="panel-body">
                            <span class={c.vm.currentExpense() == false ? ' hidden ':' '} ><Button fill large type="button" onclick={c.vm.toTagsExpense.bind(c.vm,c.vm.currentExpense())} ><span class="pt-icon-standard pt-icon-add"></span> Nueva Etiqueta</Button></span>
                            <br/>
                            <br/>
                            {tagsexpenses}
                        </div>
                    </div>
                </div>
            )
        }


        let reportsAdminPanels;

        if(c.vm.currentRol() == 1){
           reportsAdminPanels = (
                <div class="row">
                    <div class="col-md-6">
                        <ReportsCategories />
                    </div>
                    <div class="col-md-6">
                        <ReportsEmployeeTotals />
                    </div>
               </div>
           )
        }



        return (
        	<div class="dashboard">
                {title_employee}
        	    <div class="row">
                    {contentAdminPanels1}
                    {contentAdminPanels2}
                    {contentEmployeePanels0}
                    {contentEmployeePanels1}
                    {contentEmployeePanels2}
               </div>
               {reportsAdminPanels}
        	</div>
        )
    }
}

export default Dashboard;
