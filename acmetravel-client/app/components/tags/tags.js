import m from 'mithril';
import Taggle from 'taggle';
import { fromJS, List } from 'immutable';
import Observable from '../observable';
import Utils from '../utils';

export const Tags = {
    controller(p) {

        this.tags = List();

        this.config = (element, isInitialized, context) => {
            if (!isInitialized) {

                context.ref = new Taggle(element, {
                    placeholder: 'Escribe una etiqueta',
                    additionalTagClasses: 'custom-tag',
                    duplicateTagClass: 'custombounce',
                    tags: this.tags.toArray(),
                    onTagAdd: (e, tag) => p.currentTags(getSelectTags()),
                    onTagRemove: (e, tag) => p.currentTags(getSelectTags()),
                });

                let input = context.ref.getInput();

                let getSelectTags = () => context.ref.getTags();

                input.setAttribute('list', 'list_autocomplete');
                input.setAttribute('style', 'max-width:120px;');

                setTimeout(() => p.currentTags(getSelectTags()), 1000);

                return;
            }

            context.ref.removeAll();
            context.ref.add(this.tags.toArray());
        };

        this.getPanelTags = (ro) => <div class="custom-taggle"><div class="panel-tags" style={ro == false ? ' ' : ' pointer-events: none; '} config={this.config}></div></div>;

    },
    view(c, p) {
        let tags = fromJS(Utils.removeDuplicates(p.initCurrentTags));
        let allTags = p.alltags();
        let pTags = c.getPanelTags(p.disabled);
        let dlist = (
            <datalist id="list_autocomplete">
                {allTags.map((tag) => {
                    return <option value={tag.name()} />
                })}
            </datalist>
        )

        c.tags = tags;
        return <div>{pTags} {dlist}</div>
        
    }
}

export default Tags;