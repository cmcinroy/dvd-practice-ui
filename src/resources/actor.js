import React from "react";

import {List,
    Show,
    Create,
    Edit,
    Datagrid,
    TextField,
    TextInput,
    EditButton,
    ShowButton,
    Filter,
    SimpleShowLayout,
    Toolbar,
    SaveButton,
    DisabledInput,
    TabbedForm,
    FormTab } from "react-admin"

const ActorFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Last Name" source="last_name"/>
    </Filter>
);

export const ActorList = (props) => (
    <List title="Actors" {...props} sort={{ field: "last_name", order: "ASC" }} filters={<ActorFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="first_name" title="First Name"/>
            <TextField source="last_name" title="Last Name" />
            <TextField source="last_update" title={"Last Updated"}/>
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

export const ActorShow = (props) => (
    <Show title="View Actor" {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="first_name" title="First Name"/>
            <TextField source="last_name" title="Last Name" />
            <TextField source="last_update" title={"Last Updated"}/>
        </SimpleShowLayout>
    </Show>
);

export const ActorCreate = (props) => (
    <Create title="Create Actor" {...props}>
        <TabbedForm submitOnEnter={false} toolbar={<ActorCreateToolbar />}>
            <FormTab label="Section Base Fields">
                <TextInput source="first_name" />
                <TextInput source="last_name" />
            </FormTab>
        </TabbedForm>
    </Create>
);

const ActorCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="SAVE AND SHOW"
            redirect="show"
            submitOnEnter={true}
        />
        <SaveButton
            label="SAVE AND ADD"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

export const ActorEdit = (props) => (
    <Edit title="Edit Actor" {...props}>
        <TabbedForm submitOnEnter={false} toolbar={<ActorEditToolbar />}>
            <FormTab label="Section Base Fields">
                <DisabledInput source="id" />
                <TextInput source="first_name" />
                <TextInput source="last_name" />
            </FormTab>
        </TabbedForm>
    </Edit>
);

const ActorEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="SAVE AND SHOW"
            redirect="show"
            submitOnEnter={true}
        />
    </Toolbar>
);
