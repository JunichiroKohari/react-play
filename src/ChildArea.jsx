import { memo } from 'react'

const style = {
    width: '100%',
    height: '100%',
    backgroundColor: 'khaki'
}

export const ChildArea = memo((props) => {
    const { open } = props
    console.log('rendring')

    const data = [...Array(2000).keys()]
    data.forEach(() => console.log('...'))
    return (
        <>
            {open ? (
                <div style={style}>
                    <p>子コンポーネント</p>
                </div>
            ) : null}
        </>
    )
})