import {Component} from "./base/Component";

interface ICardActions {
    onClick: (event: MouseEvent) => void;
}

export interface ICard {
    category: string;
    title: string;
    description?: string | string[];
    image: string;    
    price: number;
}

export class Card extends Component<ICard> {
    protected _category?: HTMLElement; 
    protected _title: HTMLElement;
    protected _image?: HTMLImageElement;
    protected _description?: HTMLElement;
    protected _button?: HTMLButtonElement;
    protected _price: HTMLElement;

    constructor(protected blockName: string, container: HTMLElement, actions?: ICardActions) 
    

    set id(value: string) 

    get id(): string 

    set title(value: string) 

    get title(): string

    set category(value: string) 

    set image(value: string) 

    set description(value: string ) 

    set price(value: number) 
}


