
import { color } from "../../theme/color"
import { spacing } from "../../theme/spacing"
import { typography } from "../../theme/typography"


const BASE = {
    fontFamily: typography.primary,
    fontSize: spacing[4],
}
const BASE_BOLD = {
    fontFamily: typography.secondary,
    fontSize: spacing[4],
}


export const presets = {
    default: BASE,
    h1: {
        ...BASE_BOLD,
        fontSize: spacing[8]
    },
    h2: {
        ...BASE_BOLD,
        fontSize: spacing[7]
    },
    h3: {
        ...BASE_BOLD,
        fontSize: spacing[6]
    },
    h4: {
        ...BASE,
        fontSize: spacing[5]
    },
    small: {
        ...BASE,
        fontSize: 16,
    },
    verySmall: {
        ...BASE,
        fontSize: 14,
    }
}