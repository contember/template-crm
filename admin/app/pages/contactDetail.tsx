import { ContactDetail } from "~/app/components/details/contact-detail"
import { Binding } from "~/lib/binding"
import { BackButton } from "~/lib/buttons"
import { Slots } from "~/lib/layout"
import { Button } from "~/lib/ui/button"
import { EntitySubTree, Link } from "@contember/interface"

export default () => {
  return (
    <>
      <Binding>
        <div className="flex flex-col gap-12">
          <Slots.Title>Contact detail</Slots.Title>
          <Slots.Back>
            <BackButton />
          </Slots.Back>
          <EntitySubTree entity="Contact(id=$id)" isCreating={false}>
            <Slots.Actions>
              <Link to="contactEdit(id: $entity.id)">
                <Button>Edit contact</Button>
              </Link>
            </Slots.Actions>
            <ContactDetail />
          </EntitySubTree>
        </div>
      </Binding>
    </>
  )
}
