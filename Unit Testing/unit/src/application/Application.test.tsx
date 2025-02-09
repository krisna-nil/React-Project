import React from "react";
import { Application } from "./application";
import { render, screen } from "@testing-library/react";

describe("Application",()=>{
test("Renders collectly",()=>{
    render(<Application/>)
    const nameElement=screen.getByRole('textbox',{name:"Name"});
    expect(nameElement).toBeInTheDocument()
    const bioElement=screen.getByRole("textbox",{name:"Bio"})
    expect(bioElement).toBeInTheDocument()
    const joblocation=screen.getByRole("combobox");
    expect(joblocation).toBeInTheDocument()
    const termElement=screen.getByRole("checkbox")
    expect(termElement).toBeInTheDocument()
    const buttonElement=screen.getByRole("button")
    expect(buttonElement).toBeInTheDocument();
})
})