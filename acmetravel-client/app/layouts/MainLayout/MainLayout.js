import m from 'mithril';

const MainLayout = {
	controller(){
		this.logout = () => {
		    localStorage.setItem('idEmployee',false);
		    localStorage.setItem('idTravel',false);
		    localStorage.setItem('idExpense',false);
			localStorage.setItem('user',false);
			m.route('/');
		}
	},
    view(_ctrl, _attrs, children) {
        return (
            <div class="MainLayout">
            	<div class="text-center"><legend>Acme Inc - Travels</legend></div>
            	<div class="text-center"><a onclick={_ctrl.logout.bind(_ctrl)}><span class="pt-icon-standard pt-icon-cross"></span> Cerrar Sesión</a></div>
                {children}
            </div>
        );
    }
};

export default MainLayout;