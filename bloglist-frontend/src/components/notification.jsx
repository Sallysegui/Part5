const Notification = ({ info }) => {
  const style = {
    color: info.type==='error' ? 'red' : 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
  if (!info.message) {
    return
  }

  return (
    <div style={style} className={info.type} >
      {info.message}
    </div>
  )
}

export default Notification