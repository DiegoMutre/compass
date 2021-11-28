import { InsertedIds } from "../../../core/src/types/mongo.types";
import { Priority, PriorityReq } from "../../../core/src/types/priority.types";

// documents inserted in order by default, so mapping by
// key order is safe
export const mapPriorityData = (
  newIds: InsertedIds,
  data: PriorityReq[],
  userId: string
): Priority[] => {
  const priorities: Priority[] = [];
  for (const [key, id] of Object.entries(newIds)) {
    const i = parseInt(key);
    priorities.push({
      _id: id.toString(),
      user: userId,
      name: data[i].name,
      color: data[i].color,
    });
  }
  return priorities;
};
