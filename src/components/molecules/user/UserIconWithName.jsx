export const UserIconWithName = (props) => {
  const { image, name, isAdmin } = props
  return (
    <div className="user-icon-with-name-container">
      <img
        className="user-icon"
        height={160}
        width={160}
        alt={name}
        src={image}
      />
      <p className="user-name">{name}</p>
      {isAdmin && <span className="edit-link">edit</span>}
    </div>
  )
}