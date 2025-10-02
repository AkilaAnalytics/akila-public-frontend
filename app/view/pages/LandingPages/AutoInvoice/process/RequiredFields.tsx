import React from "react";

// 1. Data is restructured into groups
const groupedRequiredFields = [
  {
    groupName: "Vendor Details",
    fields: [
      { columnName: "vendor_name", description: "Vendor company name" },
      {
        columnName: "vendor_routing_number",
        description: "Bank routing number for vendor",
      },
      {
        columnName: "vendor_account_number",
        description: "Bank account number for vendor",
      },
    ],
  },
  {
    groupName: "Customer Details",
    fields: [
      {
        columnName: "bill_to_name",
        description: "Customer/client company name",
      },
      {
        columnName: "bill_to_address_line_1",
        description: "Customer address line 1",
      },
      {
        columnName: "bill_to_address_line_2",
        description: "Customer address line 2",
      },
      {
        columnName: "bill_to_address_line_3",
        description: "Customer address line 3",
      },
    ],
  },
  {
    groupName: "Invoice Details",
    fields: [
      {
        columnName: "split_order_number",
        description: "Purchase order number",
      },
      {
        columnName: "invoice_number",
        description: "Unique invoice identifier",
      },
      {
        columnName: "order_item_quantity",
        description: "Number of units ordered",
      },
      { columnName: "sku_id", description: "Product SKU identifier" },
    ],
  },
];

export default function RequiredFieldsList() {
  return (
    <div className="">
      <h3 className="sticky top-0 bg-gray-50 py-2 text-lg font-medium text-gray-900 mb-4 z-10">
        Required CSV Columns
      </h3>
      <div className="space-y-6">
        {/* 2. Map over each group */}
        {groupedRequiredFields.map((group) => (
          <div key={group.groupName}>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b pb-2">
              {group.groupName}
            </h3>
            <ul className="space-y-3">
              {/* 3. Map over the fields within each group */}
              {group.fields.map((field, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2"></div>
                  <div>
                    <strong className="text-gray-800">
                      {field.columnName}
                    </strong>
                    <span className="text-gray-600">
                      {" "}
                      - {field.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
