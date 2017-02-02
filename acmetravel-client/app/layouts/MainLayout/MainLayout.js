import m from 'mithril';

const MainLayout = {
    view(_ctrl, _attrs, children) {
        return (
            <div class="MainLayout">
            	<div class="text-center"><legend>Acme Inc - Travels</legend></div>
                {children}
            </div>
        );
    }
};

export default MainLayout;