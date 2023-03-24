/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const bcrypt = require('bcrypt');

const saltRounds = 10;
const salt = bcrypt.genSalt(saltRounds);


exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users_section').del();
  await knex('users_section').insert([
    {
      u_name: 'Jhos',
      u_email: 'testmail11@yopmail.com',
      u_password: '$2b$10$oIYX5393aM35yI79pSbnV.V8ZU/1f71XE3EX9/3KPSnQKEB/4/Jvm',
      u_phone: '0721381239',
    },
    {
      u_name: 'Jhos',
      u_email: 'testmail12@yopmail.com',
      u_password: '$2b$10$oIYX5393aM35yI79pSbnV.V8ZU/1f71XE3EX9/3KPSnQKEB/4/Jvm',
      u_phone: '0721381239',
    },
    {
      u_name: 'Jhos',
      u_email: 'testmail13@yopmail.com',
      u_password: '$2b$10$oIYX5393aM35yI79pSbnV.V8ZU/1f71XE3EX9/3KPSnQKEB/4/Jvm',
      u_phone: '0721381239',
    },
    {
      u_name: 'Jhos',
      u_email: 'testmail14@yopmail.com',
      u_password: '$2b$10$oIYX5393aM35yI79pSbnV.V8ZU/1f71XE3EX9/3KPSnQKEB/4/Jvm',
      u_phone: '0721381239',
    },
    {
      u_name: 'Jhos',
      u_email: 'testmail15@yopmail.com',
      u_password: '$2b$10$oIYX5393aM35yI79pSbnV.V8ZU/1f71XE3EX9/3KPSnQKEB/4/Jvm',
      u_phone: '0721381239',
    },
    {
      u_name: 'Jhos',
      u_email: 'testmial11@yopmail.com',
      u_password: '$2b$10$oIYX5393aM35yI79pSbnV.V8ZU/1f71XE3EX9/3KPSnQKEB/4/Jvm',
      u_phone: '0721381239',
    },
    {
      u_name: 'Jhos',
      u_email: 'testmial12@yopmail.com',
      u_password: '$2b$10$oIYX5393aM35yI79pSbnV.V8ZU/1f71XE3EX9/3KPSnQKEB/4/Jvm',
      u_phone: '0721381239',
    },
    {
      u_name: 'Jhos',
      u_email: 'testmial13@yopmail.com',
      u_password: '$2b$10$oIYX5393aM35yI79pSbnV.V8ZU/1f71XE3EX9/3KPSnQKEB/4/Jvm',
      u_phone: '0721381239',
    },
    {
      u_name: 'Jhos',
      u_email: 'testmial14@yopmail.com',
      u_password: '$2b$10$oIYX5393aM35yI79pSbnV.V8ZU/1f71XE3EX9/3KPSnQKEB/4/Jvm',
      u_phone: '0721381239',
    },
    {
      u_name: 'Jhos',
      u_email: 'testmial15@yopmail.com',
      u_password: '$2b$10$oIYX5393aM35yI79pSbnV.V8ZU/1f71XE3EX9/3KPSnQKEB/4/Jvm',
      u_phone: '0721381239',
    },
    {
      u_name: 'Jhos',
      u_email: 'checkmial11@yopmail.com',
      u_password: '$2b$10$oIYX5393aM35yI79pSbnV.V8ZU/1f71XE3EX9/3KPSnQKEB/4/Jvm',
      u_phone: '0721381239',
    },
    {
      u_name: 'Jhos',
      u_email: 'checkmial12@yopmail.com',
      u_password: '$2b$10$oIYX5393aM35yI79pSbnV.V8ZU/1f71XE3EX9/3KPSnQKEB/4/Jvm',
      u_phone: '0721381239',
    },
    {
      u_name: 'Jhos',
      u_email: 'checkmial13@yopmail.com',
      u_password: '$2b$10$oIYX5393aM35yI79pSbnV.V8ZU/1f71XE3EX9/3KPSnQKEB/4/Jvm',
      u_phone: '0721381239',
    },
    {
      u_name: 'Jhos',
      u_email: 'checkmial14@yopmail.com',
      u_password: '$2b$10$oIYX5393aM35yI79pSbnV.V8ZU/1f71XE3EX9/3KPSnQKEB/4/Jvm',
      u_phone: '0721381239',
    },
    {
      u_name: 'Jhos',
      u_email: 'checkmial15@yopmail.com',
      u_password: '$2b$10$oIYX5393aM35yI79pSbnV.V8ZU/1f71XE3EX9/3KPSnQKEB/4/Jvm',
      u_phone: '0721381239',
    },
  ]);
};
