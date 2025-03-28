import { LocationDetail } from "~/app/components/details/location-detail"
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
          <Slots.Title>Location detail</Slots.Title>
          <Slots.Back>
            <BackButton />
          </Slots.Back>
          <EntitySubTree entity="Location(id=$id)" isCreating={false}>
            <Slots.Actions>
              <Link to="locationEdit(id: $entity.id)">
                <Button>Edit location</Button>
              </Link>
            </Slots.Actions>
            <LocationDetail />
          </EntitySubTree>
        </div>
      </Binding>
    </>
  )
}
