const allRoles = {
  user: ['getCategories', 'getProducts'],
  admin: ['getUsers', 'manageUsers', 'getCategories', 'manageCategory', 'getProducts', 'manageProducts'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
