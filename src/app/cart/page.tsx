import styles from '../styles/cart.module.css';
export default function Cart(){
    return(
        <div>
            <h4 className = {styles.title}>Cart</h4>
            <CartItem/>
        </div>
    )
}
function CartItem(){
    return(
        <div className={styles.cartItem}>
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
    </div> 
    )
}