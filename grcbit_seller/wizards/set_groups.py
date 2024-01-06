# -*- coding: utf-8 -*-

from odoo import api, fields, models

class SetGroupsSeller(models.TransientModel):
    _inherit = 'set.groups.user'

    seller_admin_check = fields.Boolean(string="Admin", default=lambda x:x.get_current_groups_seller('Admin' if x.user_id.tz == 'en_US' else 'Administrador'))
    reseller_admin_check = fields.Boolean(string="Reseller Admin", default=lambda x:x.get_current_groups_seller('Reseller Admin'))
    seller_user_check = fields.Boolean(string="Reseller User - 1", default=lambda x:x.get_current_groups_seller('Reseller User - 1'))
    seller_user_alt_check = fields.Boolean(string="Reseller User - 2", default=lambda x:x.get_current_groups_seller('Reseller User - 2'))

    def get_current_groups_seller(self, name):
        user = self.env.context.get('active_id')
        user_id = self.sudo().env['res.users'].search([('id','=', user)])
        if user_id.tz == 'en_US':
            lang = 'GRC Seller'
        else: 
            lang = 'Vendedor GRC'
        category_id = self.sudo().env['ir.module.category'].search([('name','=', lang)])
        groups = self.sudo().env['res.groups'].search([('name','=', name),('category_id','=',category_id.id)])
        if user_id.id in [n.id for n in groups.users]:
            return True
        else:
            return False

    def base_values_seller(self,name):
        user = self.env.context.get('active_id')
        user_id = self.sudo().env['res.users'].search([('id','=', user)])
        if user_id.tz == 'en_US':
            lang = 'GRC Seller'
        else: 
            lang = 'Vendedor GRC'
        category_id = self.sudo().env['ir.module.category'].search([('name','=', lang)])
        groups = self.sudo().env['res.groups'].search([('name','=', name),('category_id','=',category_id.id)])
        return groups

    def assign_groups(self):
        res = super(SetGroupsSeller, self).assign_groups()

        for rec in self:
            data = {
                'seller_admin_check': None,
                'reseller_admin_check': None,
                'seller_user_check': None,
                'seller_user_alt_check': None,
            }
            data.update({
                'seller_admin_check': rec.seller_admin_check,
                'reseller_admin_check': rec.reseller_admin_check,
                'seller_user_check': rec.seller_user_check,
                'seller_user_alt_check': rec.seller_user_alt_check,
            })
            if data['seller_admin_check'] == True:
                group_custom = self.base_values_seller('Admin' if self.user_id.tz == 'en_US' else 'Administrador')
                user = self.env.context.get('active_id')
                user_id = self.sudo().env['res.users'].search([('id','=', user)])
                group_custom.users = [(4, user)]
            else:
                group_custom = self.base_values_seller('Admin' if self.user_id.tz == 'en_US' else 'Administrador')
                user = self.env.context.get('active_id')
                group_custom.users = [(3, user)]

            if data['reseller_admin_check'] == True:
                group_custom = self.base_values_seller('Reseller Admin')
                user = self.env.context.get('active_id')
                user_id = self.sudo().env['res.users'].search([('id','=', user)])
                group_custom.users = [(4, user)]
            else:
                group_custom = self.base_values_seller('Reseller Admin')
                user = self.env.context.get('active_id')
                group_custom.users = [(3, user)]

            if data['seller_user_check'] == True:
                group_custom = self.base_values_seller('Reseller User - 1')
                user = self.env.context.get('active_id')
                user_id = self.sudo().env['res.users'].search([('id','=', user)])
                group_custom.users = [(4, user)]
            else:
                group_custom = self.base_values_seller('Reseller User - 1')
                user = self.env.context.get('active_id')
                group_custom.users = [(3, user)]

            if data['seller_user_alt_check'] == True:
                group_custom = self.base_values_seller('Reseller User - 2')
                user = self.env.context.get('active_id')
                user_id = self.sudo().env['res.users'].search([('id','=', user)])
                group_custom.users = [(4, user)]
            else:
                group_custom = self.base_values_seller('Reseller User - 2')
                user = self.env.context.get('active_id')
                group_custom.users = [(3, user)]

        return res