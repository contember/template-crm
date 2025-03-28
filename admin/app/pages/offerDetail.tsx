import { OfferDetail } from "~/app/components/details/offer-detail"
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
          <Slots.Title>Offer detail</Slots.Title>
          <Slots.Back>
            <BackButton />
          </Slots.Back>
          <EntitySubTree entity="Offer(id=$id)" isCreating={false}>
            <Slots.Actions>
              <Link to="offerEdit(id: $entity.id)">
                <Button>Edit offer</Button>
              </Link>
            </Slots.Actions>
            <OfferDetail />
          </EntitySubTree>
        </div>
      </Binding>
    </>
  )
}
