const slack_workflow_builder = {
  blocks: [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "Open A New Ticket.",
        emoji: true,
      },
    },
    {
      type: "input",
      element: {
        type: "plain_text_input",
        action_id: "customer's name",
      },
      label: {
        type: "plain_text",
        text: "Requester's Name *",
        emoji: true,
      },
    },
    {
      type: "divider",
    },
    {
      type: "input",
      element: {
        type: "plain_text_input",
        action_id: "customer's phone",
      },
      label: {
        type: "plain_text",
        text: "Requester's Phone *",
        emoji: true,
      },
    },
    {
      type: "divider",
    },
    {
      type: "input",
      element: {
        type: "plain_text_input",
        action_id: "customer's email",
      },
      label: {
        type: "plain_text",
        text: "Requester's email",
        emoji: true,
      },
    },
    {
      type: "divider",
    },
    {
      type: "input",
      element: {
        type: "static_select",
        placeholder: {
          type: "plain_text",
          text: "Type here to search",
          emoji: true,
        },
        options: [
          {
            text: {
              type: "plain_text",
              text: "Debonairs Pizza Zevenwatch",
              emoji: true,
            },
            value: "value-0",
          },
          {
            text: {
              type: "plain_text",
              text: "Test Company",
              emoji: true,
            },
            value: "value-1",
          },
          {
            text: {
              type: "plain_text",
              text: "Another Test Company",
              emoji: true,
            },
            value: "value-2",
          },
        ],
        action_id: "brand_company",
      },
      label: {
        type: "plain_text",
        text: "Brand / Company Name",
        emoji: true,
      },
    },
    {
      type: "divider",
    },
    {
      type: "input",
      element: {
        type: "static_select",
        placeholder: {
          type: "plain_text",
          text: "Search for a category",
          emoji: true,
        },
        options: [
          {
            text: {
              type: "plain_text",
              text: "Late Delivery",
              emoji: true,
            },
            value: "value-0",
          },
          {
            text: {
              type: "plain_text",
              text: "Incorrect Order",
              emoji: true,
            },
            value: "value-1",
          },
          {
            text: {
              type: "plain_text",
              text: "Another Subject",
              emoji: true,
            },
            value: "value-2",
          },
        ],
        action_id: "category",
      },
      label: {
        type: "plain_text",
        text: "Subject / Category",
        emoji: true,
      },
    },
    {
      type: "divider",
    },
    {
      type: "input",
      element: {
        type: "plain_text_input",
        multiline: true,
        action_id: "message",
      },
      label: {
        type: "plain_text",
        text: "Message",
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Click here to open a new ticket",
      },
      accessory: {
        type: "button",
        text: {
          type: "plain_text",
          text: "Submit Ticket",
          emoji: true,
        },
        value: "click_me_123",
        action_id: "submit button",
      },
    },
  ],
};