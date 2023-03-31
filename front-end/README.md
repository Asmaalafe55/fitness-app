# Amdocs App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## On using Sass or .scss files

you might see that there are `style.module.scss` files being used, the `.scss` means that we are using the the [sass css language](https://sass-lang.com/documentation/syntax) think of it as an upgraded css, one important features it has is to nest classes

```scss
.classA {
  width: 200px;

  .classB {
    // some more styles here
  }
}
```

also it has variables!

```scss
$base-color: #538c;

.title {
  color: $base-color;
}
```

the `.module` makes sure that the current styles are unique **only for where it's imported**, so for example if we have `.module.css` or `.module.scss` in the `Navbar` component, then that styling will only apply to the Navbar and won't be global.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
