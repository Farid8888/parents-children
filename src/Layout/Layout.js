import Navigation from './Navigation'
import classes from './Layout.module.css'

const Layout =(props)=>{
    return(
        <div className={classes.layout}>
       <Navigation/>
       {props.children}
     </div>
    )
}

export default Layout