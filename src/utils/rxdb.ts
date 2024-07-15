import { _ } from 'lodash';

interface whereClauseArgs {
  [key: string]: object;
}
export const logPushResults = (
  writtenDocs: any,
  conflicts: any,
  writeRows: any,
) => {
  console.log('## written documents:');
  console.log(JSON.stringify(writtenDocs, null, 4));
  console.log('## conflicts:');
  console.log(JSON.stringify(conflicts, null, 4));
  console.log('writeRows');
  console.log(writeRows);
};

export const getPullClause = (
  sortId: number = 0,
  updatedAt: Date = new Date(0),
  limit: number = 5,
  sortIdKey: string = 'sort_id',
  updatedAtKey: string = 'ts_updated',
) => {
  const whereAndClause: [whereClauseArgs] = [
    {
      [updatedAtKey]: {
        equals: updatedAt,
      },
    },
  ];
  if (sortId) {
    whereAndClause.push({
      [sortIdKey]: {
        gt: sortId,
      },
    });
  }

  const clause = {
    orderBy: [
      {
        [updatedAtKey]: 'asc',
      },
      {
        [sortIdKey]: 'asc',
      },
    ],
    where: {
      OR: [
        {
          [updatedAtKey]: {
            gt: updatedAt,
          },
        },
        {
          AND: whereAndClause,
        },
      ],
    },
    take: limit,
  };

  return clause;
};

export const documentsAreEqual = (obj1, obj2, ignoreKeys) => {
  // does not modify original objects
  obj1 = { ...obj1 };
  obj2 = { ...obj2 };
  if (typeof obj1 == 'object' && typeof obj2 == 'object') {
    // remove keys from obj1 + obj2
    ignoreKeys.forEach((key) => {
      delete obj1[key];
      delete obj2[key];
    });
    return _.isEqual(obj1, obj2);
  }
  return false;
};

export const getConflicts = (currentMaster, assumedMaster, ignoreKeys = []) => {
  // merge ignoreKeys with default ignoreKeys
  ignoreKeys = ignoreKeys.concat([
    'id',
    'sort_id',
    'ts_assigned',
    'ts_completed',
    'ts_inserted',
    'ts_updated',
    'ts_deleted',
    '_attachments',
  ]);
  if (
    currentMaster &&
    assumedMaster &&
    !documentsAreEqual(currentMaster, assumedMaster, ignoreKeys)
  ) {
    return [currentMaster];
  }
  return [];
};

exports.getConflicts = getConflicts;
exports.getPullClause = getPullClause;
exports.logPushResults = logPushResults;
