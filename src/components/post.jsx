import classes from './Post.module.css'
const Post=(props)=>{
    return <div className={classes.post}>
       <li><p className={classes.author} > {props.author}</p>
       <p className={classes.text}> {props.name}</p></li>
    </div>
}
export default Post


