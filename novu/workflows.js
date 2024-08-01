const { workflow } = require('@novu/framework');
const { z } = require('zod');
const axios = require('axios');

const hourlyHeadlinesWorkflow = workflow('hourly-headlines', async ({ step }) => {

    await step.inApp('send-headlines', async () => {
        return {
            body: `Here are the latest headlines:\n\n${[].join('\n')}`,
        };
    });
}, {
    payloadSchema: z.object({}),
});

module.exports = { hourlyHeadlinesWorkflow };
