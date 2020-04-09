import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { Button } from 'antd'

const Setting: React.FC<{}> = () => {
  const history = useHistory()
  const [count, setCount] = useState(0)
  /**
   * useState 等价于 class 里面的 this.state
   * useState() 返回的一个含 state 和 setState 的数组
   * state hook 可以有多个
   */ 
  const handleClick = () => {
    // eslint-disable-next-line no-constant-condition
    setCount(count + 1)
    history.push('/home')
    /*
    * setCount(count + 1) 等价于 class 里面的 this.setState({ count: count + 1 })
    */
  }

  useEffect(() => {
    console.log('update')
    return () => {
      console.log('xiezai')
    }
  }, [])

  return (
    <div>
      <Button onClick={handleClick}>
        计时器
        { count }
      </Button>
    </div>
  )
}

export default Setting
