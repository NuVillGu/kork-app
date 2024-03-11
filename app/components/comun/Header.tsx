import React from 'react';
import { Form, InputGroup, Button, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import Image from 'next/image';


function Header ({handle}) {

    const avatar_picture = (
        <div id="avatar-pic">
            <div id="avatar-pic_initials">NV</div>
        </div>
    );

    return (
        <div id="main-header_nav">
            <div id="aux-header_nav">
                <div id="header_nav-left">
                    <div onClick={handle}>
                        <Image src="/logo.svg" alt="Bell" width={100} height={100}/>
                    </div>
                </div>
                <div id="header_nav-center">
                    <div id="header_nav-center_searcher">
                        <InputGroup>
                            <Form.Control aria-label="Searcher" aria-describedby="Searcher"/>
                            <InputGroup.Text>
                                <Button>SEARCH</Button>
                            </InputGroup.Text>
                        </InputGroup>
                    </div>
                </div>
                <div id="header_nav-right">
                    <div id="header_nav-right_options">
                        <div id="header_nav-right_options-chat">
                            <Button>
                                <Image src="/chat.svg" alt="Chat" width={26} height={26}/>
                            </Button>
                        </div>
                        <div id="header_nav-right_options-bell">
                            <Button>
                                <Image src="/bell.svg" alt="Bell" width={21} height={22}/>
                            </Button>
                        </div>
                    </div>
                    <div id="header_nav-right_dropdown">
                        <DropdownButton as={ButtonGroup} title={avatar_picture}>
                            <Dropdown.Header>
                                <div id="avatar">
                                    <div id="avatar-pic">
                                        <div id="avatar-pic_initials">NV</div>
                                    </div>
                                    <div id="avatar-userinfo">
                                        <div id="avatar-userinfo_name">Nuria Villaronga</div>
                                        <div id="avatar-userinfo_rol">Administrador</div>
                                    </div>
                                </div>
                            </Dropdown.Header>
                            <Dropdown.Divider/>
                            <Dropdown.Item>MY PROFILE</Dropdown.Item>
                            <Dropdown.Item>SETTINGS</Dropdown.Item>
                            <Dropdown.Item>HELP</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item>SIGN OUT</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
