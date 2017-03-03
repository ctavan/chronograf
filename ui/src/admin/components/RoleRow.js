import React, {PropTypes} from 'react'
import _ from 'lodash'

import MultiSelectDropdown from 'shared/components/MultiSelectDropdown'

const PERMISSIONS = [
  "NoPermissions",
  "ViewAdmin",
  "ViewChronograf",
  "CreateDatabase",
  "CreateUserAndRole",
  "AddRemoveNode",
  "DropDatabase",
  "DropData",
  "ReadData",
  "WriteData",
  "Rebalance",
  "ManageShard",
  "ManageContinuousQuery",
  "ManageQuery",
  "ManageSubscription",
  "Monitor",
  "CopyShard",
  "KapacitorAPI",
  "KapacitorConfigAPI",
]

const RoleRow = ({role: {name, permissions, users}}) => (
  <tr>
    <td>{name}</td>
    <td>
      {
        permissions && permissions.length ?
        <MultiSelectDropdown
          items={PERMISSIONS}
          selectedItems={_.get(permissions, ['0', 'allowed'], [])}
          label={'Select Permissions'}
          onApply={() => '//TODO'}
        /> : '\u2014'
      }
    </td>
    <td>
      {
        users && users.length ?
        <MultiSelectDropdown
          items={users.map((role) => role.name)}
          selectedItems={[]}
          label={'Select Users'}
          onApply={() => '//TODO'}
        /> : '\u2014'
      }
    </td>
    <td>
      🗑
    </td>
  </tr>
)

const {
  arrayOf,
  shape,
  string,
} = PropTypes

RoleRow.propTypes = {
  role: shape({
    name: string,
    permissions: arrayOf(shape({
      name: string,
    })),
    users: arrayOf(shape({
      name: string,
    })),
  }).isRequired,
}

export default RoleRow
