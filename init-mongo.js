db.createUser({
  user: 'nazim',
  pwd: 'nazim',
  roles: [
    {
      role: 'readWrite',
      db: 'projet'
    }
  ]
})