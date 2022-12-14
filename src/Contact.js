import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarSection from "./SidebarSection";

export default function Contact({ email, phone, profiles, title }) {
  let contacts = profiles.map(({ network, url }) => ({
    icon: ["fab", network.toLowerCase()],
    value: url
  }))

  if (email) {
    contacts.unshift({
      icon: "at",
      value: email
    })
  }

  if (phone) {
    contacts.unshift({
      icon: "phone",
      value: phone
    })
  }

  return (
    <SidebarSection title={title}>
      <div className="flex flex-col gap-y-1">
        {contacts.map(({ icon, value }) => (
          <div className="flex items-center gap-x-1">
            <FontAwesomeIcon icon={icon} />
            <div className="text-md">{value}</div>
          </div>
        ))}
      </div>
    </SidebarSection>
  )
}