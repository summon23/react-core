/**
 * Sidebar menu items
 */

export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Product',
      url: '/product',
      icon: 'icon-social-dropbox',
      children: [
          {
            name: 'Product List',
            url: '/product/list',
            icon: 'icon-puzzle'
          },
          {
              name: 'Add a Product',
              url: '/product/add',
              icon: 'icon-puzzle'
          }
        ]
    },
    {
        name: 'Login',
        url: '/login',
        icon: 'icon-user'
    }
  ]
};
