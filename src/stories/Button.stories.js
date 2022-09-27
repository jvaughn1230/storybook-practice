import Button from "../components/Button";

export default {
    title: "Button",
    component: Button,
    argTypes: { handleClick: { action: "dacdascd" } },
}

const Template = args => <Button {...args} />

export const Red = Template.bind({})

Red.args = {
    backgroundColor: "red",
    label: "Press Me",
    size: "md",
}