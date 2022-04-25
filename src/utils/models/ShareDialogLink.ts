import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export class ShareDialogLink{
    name: string;
    shareUrl: string;
    faIcon: IconDefinition;
    faIconClass: string

    constructor(name: string, shareUrl: string, faIcon: IconDefinition, faIconClass: string) {
        this.name = name;
        this.shareUrl = shareUrl;
        this.faIcon = faIcon;
        this.faIconClass = faIconClass;
    }
}