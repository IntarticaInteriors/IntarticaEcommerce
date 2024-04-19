const allRoles = {
  user: ['getCategories', 'getProducts'],
  admin: ['getUsers', 'manageUsers', 'getCategories', 'manageCategories', 'getProducts', 'manageProducts'],
  businessUser:['getCategories','getProducts','manageProfile','manageProjects'],
  individualUser:['getCategories','getProducts','manageProfile',]
};


const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
