import m from 'mithril';

const MainLayout = {
    view(_ctrl, _attrs, children) {
        return (
            <div class="MainLayout">
                {children}
            </div>
        );
    }
};

export default MainLayout;