import { icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact({ email, phone, profiles }) {
  let contacts = []
  if (email) {
    contacts.push({
      icon: "at",
      value: email
    })
  }

  if (phone) {
    contacts.push({
      icon: "phone",
      value: phone
    })
  }

  contacts = [...contacts, ...profiles.map(({network, url}) => ({
    icon: ["fab", network.toLowerCase()],
    value: url
  }))]

  return (
    <div>
      <div className="uppercase text-2xl font-light">Contact</div>
      <div>
        {contacts.map(({icon, value}) => (
          <div className="flex">
            <FontAwesomeIcon icon={icon} />
            <div>{value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}