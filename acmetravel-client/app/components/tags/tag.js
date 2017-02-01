import m from 'mithril';
import API from '../api';
import {Config} from '../../config';

export const Tag = function(data) {
    data = data || {};
    this.id = m.prop(data.id || false);
    this.name = m.prop(data.name || '');
}

export const ServiceTag = function(data) {
    data = data || {};
    this.id = m.prop(data.id || false);
    this.name = m.prop(data.name || '');
}

export const EmployeeTag = function(data) {
    data = data || {};
    this.id = m.prop(data.id || false);
    this.name = m.prop(data.name || '');
}

/* 
 * Get tags of current resource, venue and resource id 
 */
Tag.list = function() {
    return API.get('tags/venues/:vid:',{type: Tag});
}

ServiceTag.list = function(idResource) {
    return API.get(`tags/venues/service/${idResource}`,{type: ServiceTag});
}

EmployeeTag.list = function(idResource) {
    return API.get(`tags/venues/employee/${idResource}`,{type: EmployeeTag});
}
