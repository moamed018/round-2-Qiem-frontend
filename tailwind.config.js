// module.exports = {
//     variants: {
//         extend: {
//             textColor: ["group-hover"],
//             backgroundImage: ["group-hover", "hover"],
//         },
//     },
// };

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    safelist: [
        {
            pattern: /bg-(.*)-(.*)/,
            variants: ["hover", "group-hover"],
        },
        {
            pattern: /text-(.*)-(.*)/,
            variants: ["hover", "group-hover"],
        },
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
