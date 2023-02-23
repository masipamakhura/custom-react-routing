import classNames  from "classnames";
import useNavigation from "../hooks/use-navigation";
function Link({to,children,className,activeClassName}){
    const {navigate,currentPath } = useNavigation();
    const classes = classNames(
        'text-blue-500',
        className,
        currentPath === to && activeClassName);
    const handleLink = (ev)=>{
        if(ev.metaKey || ev.ctrlKey) return;
        ev.preventDefault();
        navigate(to);

    }

    return <a className={classes} href={to} onClick={handleLink}>{children}</a>
}
export default Link;