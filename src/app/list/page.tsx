import styles from './../styles/list.module.css'
export default function Home() {
  let 상품 :string[] = ["토마토", "파스타", "코코넛", "파스타 2", "파스타 2", "파스타 2"]
    return (
        <div className={styles.container}>
          <h4 className={styles.title}>상품목록</h4>
          <div className={styles.list}>
          {상품.map((상품명 : string, idx :number) =>{
          return(
          <div className={styles.food} key = {idx}>
            <img src={`/food${idx}.jpg`} className={styles.foodImg}/>
            <h4>{상품명} $40</h4> 
          </div> 
          )})}
          </div>
      </div>
    );
  }
  