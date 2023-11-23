# -*- coding: utf-8 -*-
""" This file add two objects """
from odoo import fields, models, api, _


class TagZT(models.Model):
    _name = "dashboard.tag.zt"
    _description = "dashboard Tag ZT"

    name = fields.Char('Tag Name', required=True, translate=True)
    color = fields.Integer('Color Index')

    _sql_constraints = [
        ('name_uniq', 'unique (name)', "Tag name already exists !"),
    ]


class BackendDashboardZT(models.Model):
    _name = 'backend.dashboard.zt'
    _inherit = ['mail.thread']
    _order = 'sequence, id'

    name = fields.Char('Name')
    comment = fields.Text(string='Notes')
    color = fields.Integer('Color Index')
    user_id = fields.Many2one(
        'res.users',
        string='Owner',
        ondelete='cascade',
        track_visibility='onchange',
        default=lambda self: self.env.uid,
        help="Owner dashboard")
    url = fields.Char(
        'URL',
        index=True,
        required=True,
        track_visibility='onchange')
    active = fields.Boolean('Active', default=True)
    sequence = fields.Integer()
    tag_ids = fields.Many2many(
        'dashboard.tag.zt',
        'dashboard_tags_zt_rel',
        'dashboard_id',
        'tag_id',
        string='Tags')
    main_dashboard = fields.Boolean('Main Dashboard', default=False)
    height = fields.Integer('Height(px)', default='750', help='Height in px')
    width = fields.Integer('Width(%)', default='100', help='Width in %')

    def get_dashboard(self):
        """ to visit your dashboard """
        if self.url:
            action = {
                'type': 'ir.actions.client',
                'tag': 'view_dashboard',
                'params': {
                    'url': self.url,
                    'height': self.height,
                    'width': self.width},
            }
        else:
            action = {'warning': {'title': _("Warning"), 'message': _(
                "Wrong configuration for the iframe"), }, }
        return action