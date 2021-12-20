
export enum BreakpointStatus
{
    BS_SET,
    BS_SETTING,
    BS_UNSET,
};

export enum DexInsnType
{
    DIT_NONE,
    DIT_NOP,
    DIT_MOVE,
    DIT_MOVE_RESULT,
    DIT_RETURN,
    DIT_CONST,
    DIT_MONITOR,
    DIT_CHECK_CAST,
    DIT_INSTANCE_OF,
    DIT_ARRAY_LENGTH,
    DIT_NEW_INSTANCE,
    DIT_NEW_ARRAY,
    DIT_FILL_NEW_ARRAY,
    DIT_FILL_ARRAY_DATA,
    DIT_THROW,
    DIT_GOTO,
    DIT_SWITCH,
    DIT_CMP,
    DIT_IF,
    DIT_UNUSED,
    DIT_AGET,
    DIT_APUT,
    DIT_IGET,
    DIT_IPUT,
    DIT_SGET,
    DIT_SPUT,
    DIT_INVOKE,
    DIT_NEG_NOT,
    DIT_NUMBER_CAST,
    DIT_AOP,
    DIT_AOP_ADDR,
    DIT_MACOR_REGISTER,
    DIT_MACOR_LOCALS,
    DIT_MACOR_PACKED_SWITCH_START,
    DIT_MACOR_SPARSE_SWITCH_START,
    DIT_MACOR_PACKED_SWITCH_END,
    DIT_MACOR_SPARSE_SWITCH_END,
    DIT_MACOR_LABEL,
};
