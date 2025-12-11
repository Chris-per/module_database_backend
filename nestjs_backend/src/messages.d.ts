import * as $protobuf from "protobufjs";
/** Namespace at. */
export namespace at {

    /** Namespace spg. */
    namespace spg {

        /** Namespace protobuf. */
        namespace protobuf {

            /** Namespace artemis. */
            namespace artemis {

                /** Namespace automation. */
                namespace automation {

                    /** Properties of an AutomationStateReq. */
                    interface IAutomationStateReq {
                    }

                    /**
                     * Route: at.spg.protobuf.artemis.automation.state
                     * Signature: Flux<AutomationStateRes>(AutomationStateReq)
                     */
                    class AutomationStateReq implements IAutomationStateReq {

                        /**
                         * Constructs a new AutomationStateReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.automation.IAutomationStateReq);

                        /**
                         * Creates a new AutomationStateReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AutomationStateReq instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.automation.IAutomationStateReq): at.spg.protobuf.artemis.automation.AutomationStateReq;

                        /**
                         * Encodes the specified AutomationStateReq message. Does not implicitly {@link at.spg.protobuf.artemis.automation.AutomationStateReq.verify|verify} messages.
                         * @param message AutomationStateReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.automation.IAutomationStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AutomationStateReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.automation.AutomationStateReq.verify|verify} messages.
                         * @param message AutomationStateReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.automation.IAutomationStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AutomationStateReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AutomationStateReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.automation.AutomationStateReq;

                        /**
                         * Decodes an AutomationStateReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AutomationStateReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.automation.AutomationStateReq;

                        /**
                         * Verifies an AutomationStateReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AutomationStateReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AutomationStateReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.automation.AutomationStateReq;

                        /**
                         * Creates a plain object from an AutomationStateReq message. Also converts values to other types if specified.
                         * @param message AutomationStateReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.automation.AutomationStateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AutomationStateReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AutomationStateRes. */
                    interface IAutomationStateRes {

                        /** AutomationStateRes timestamp */
                        timestamp?: (number|null);

                        /** AutomationStateRes description */
                        description?: (string|null);
                    }

                    /** Represents an AutomationStateRes. */
                    class AutomationStateRes implements IAutomationStateRes {

                        /**
                         * Constructs a new AutomationStateRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.automation.IAutomationStateRes);

                        /** AutomationStateRes timestamp. */
                        public timestamp: number;

                        /** AutomationStateRes description. */
                        public description: string;

                        /**
                         * Creates a new AutomationStateRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AutomationStateRes instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.automation.IAutomationStateRes): at.spg.protobuf.artemis.automation.AutomationStateRes;

                        /**
                         * Encodes the specified AutomationStateRes message. Does not implicitly {@link at.spg.protobuf.artemis.automation.AutomationStateRes.verify|verify} messages.
                         * @param message AutomationStateRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.automation.IAutomationStateRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AutomationStateRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.automation.AutomationStateRes.verify|verify} messages.
                         * @param message AutomationStateRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.automation.IAutomationStateRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AutomationStateRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AutomationStateRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.automation.AutomationStateRes;

                        /**
                         * Decodes an AutomationStateRes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AutomationStateRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.automation.AutomationStateRes;

                        /**
                         * Verifies an AutomationStateRes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AutomationStateRes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AutomationStateRes
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.automation.AutomationStateRes;

                        /**
                         * Creates a plain object from an AutomationStateRes message. Also converts values to other types if specified.
                         * @param message AutomationStateRes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.automation.AutomationStateRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AutomationStateRes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Transitions enum. */
                    enum Transitions {
                        UNDEFINED = 0,
                        SETUP_DEVICES = 1,
                        PREPARE_R2R = 2,
                        EXECUTE_PROCESS = 3,
                        RESET = 99,
                        SHUTDOWN = 100,
                        TRANSITIONS_LOCK_STEP = 105,
                        TRANSITIONS_RELOAD_JOB = 110
                    }

                    /** Properties of a ProcessExecutionConfigurationMsg. */
                    interface IProcessExecutionConfigurationMsg {

                        /** ProcessExecutionConfigurationMsg activateLockStepping */
                        activateLockStepping?: (boolean|null);

                        /** ProcessExecutionConfigurationMsg skipDielectricInject */
                        skipDielectricInject?: (boolean|null);

                        /** ProcessExecutionConfigurationMsg skipDielectricUvCuring */
                        skipDielectricUvCuring?: (boolean|null);

                        /** ProcessExecutionConfigurationMsg skipSilverJetting */
                        skipSilverJetting?: (boolean|null);

                        /** ProcessExecutionConfigurationMsg skipSilverCuring */
                        skipSilverCuring?: (boolean|null);

                        /** ProcessExecutionConfigurationMsg skipVacuumSuction */
                        skipVacuumSuction?: (boolean|null);
                    }

                    /** Represents a ProcessExecutionConfigurationMsg. */
                    class ProcessExecutionConfigurationMsg implements IProcessExecutionConfigurationMsg {

                        /**
                         * Constructs a new ProcessExecutionConfigurationMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.automation.IProcessExecutionConfigurationMsg);

                        /** ProcessExecutionConfigurationMsg activateLockStepping. */
                        public activateLockStepping: boolean;

                        /** ProcessExecutionConfigurationMsg skipDielectricInject. */
                        public skipDielectricInject: boolean;

                        /** ProcessExecutionConfigurationMsg skipDielectricUvCuring. */
                        public skipDielectricUvCuring: boolean;

                        /** ProcessExecutionConfigurationMsg skipSilverJetting. */
                        public skipSilverJetting: boolean;

                        /** ProcessExecutionConfigurationMsg skipSilverCuring. */
                        public skipSilverCuring: boolean;

                        /** ProcessExecutionConfigurationMsg skipVacuumSuction. */
                        public skipVacuumSuction: boolean;

                        /**
                         * Creates a new ProcessExecutionConfigurationMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProcessExecutionConfigurationMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.automation.IProcessExecutionConfigurationMsg): at.spg.protobuf.artemis.automation.ProcessExecutionConfigurationMsg;

                        /**
                         * Encodes the specified ProcessExecutionConfigurationMsg message. Does not implicitly {@link at.spg.protobuf.artemis.automation.ProcessExecutionConfigurationMsg.verify|verify} messages.
                         * @param message ProcessExecutionConfigurationMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.automation.IProcessExecutionConfigurationMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProcessExecutionConfigurationMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.automation.ProcessExecutionConfigurationMsg.verify|verify} messages.
                         * @param message ProcessExecutionConfigurationMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.automation.IProcessExecutionConfigurationMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProcessExecutionConfigurationMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProcessExecutionConfigurationMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.automation.ProcessExecutionConfigurationMsg;

                        /**
                         * Decodes a ProcessExecutionConfigurationMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProcessExecutionConfigurationMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.automation.ProcessExecutionConfigurationMsg;

                        /**
                         * Verifies a ProcessExecutionConfigurationMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProcessExecutionConfigurationMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProcessExecutionConfigurationMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.automation.ProcessExecutionConfigurationMsg;

                        /**
                         * Creates a plain object from a ProcessExecutionConfigurationMsg message. Also converts values to other types if specified.
                         * @param message ProcessExecutionConfigurationMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.automation.ProcessExecutionConfigurationMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProcessExecutionConfigurationMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AutomationTransitionReq. */
                    interface IAutomationTransitionReq {

                        /** AutomationTransitionReq transition */
                        transition?: (at.spg.protobuf.artemis.automation.Transitions|null);

                        /** AutomationTransitionReq executionConfig */
                        executionConfig?: (at.spg.protobuf.artemis.automation.IProcessExecutionConfigurationMsg|null);
                    }

                    /**
                     * Route: at.spg.protobuf.artemis.automation.transition
                     * Signature: Flux<AutomationTransitionRes>(AutomationTransitionReq)
                     */
                    class AutomationTransitionReq implements IAutomationTransitionReq {

                        /**
                         * Constructs a new AutomationTransitionReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.automation.IAutomationTransitionReq);

                        /** AutomationTransitionReq transition. */
                        public transition: at.spg.protobuf.artemis.automation.Transitions;

                        /** AutomationTransitionReq executionConfig. */
                        public executionConfig?: (at.spg.protobuf.artemis.automation.IProcessExecutionConfigurationMsg|null);

                        /**
                         * Creates a new AutomationTransitionReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AutomationTransitionReq instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.automation.IAutomationTransitionReq): at.spg.protobuf.artemis.automation.AutomationTransitionReq;

                        /**
                         * Encodes the specified AutomationTransitionReq message. Does not implicitly {@link at.spg.protobuf.artemis.automation.AutomationTransitionReq.verify|verify} messages.
                         * @param message AutomationTransitionReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.automation.IAutomationTransitionReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AutomationTransitionReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.automation.AutomationTransitionReq.verify|verify} messages.
                         * @param message AutomationTransitionReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.automation.IAutomationTransitionReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AutomationTransitionReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AutomationTransitionReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.automation.AutomationTransitionReq;

                        /**
                         * Decodes an AutomationTransitionReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AutomationTransitionReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.automation.AutomationTransitionReq;

                        /**
                         * Verifies an AutomationTransitionReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AutomationTransitionReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AutomationTransitionReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.automation.AutomationTransitionReq;

                        /**
                         * Creates a plain object from an AutomationTransitionReq message. Also converts values to other types if specified.
                         * @param message AutomationTransitionReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.automation.AutomationTransitionReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AutomationTransitionReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AutomationTransitionRes. */
                    interface IAutomationTransitionRes {

                        /** AutomationTransitionRes ok */
                        ok?: (boolean|null);

                        /** AutomationTransitionRes info */
                        info?: (string|null);
                    }

                    /** Represents an AutomationTransitionRes. */
                    class AutomationTransitionRes implements IAutomationTransitionRes {

                        /**
                         * Constructs a new AutomationTransitionRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.automation.IAutomationTransitionRes);

                        /** AutomationTransitionRes ok. */
                        public ok: boolean;

                        /** AutomationTransitionRes info. */
                        public info: string;

                        /**
                         * Creates a new AutomationTransitionRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AutomationTransitionRes instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.automation.IAutomationTransitionRes): at.spg.protobuf.artemis.automation.AutomationTransitionRes;

                        /**
                         * Encodes the specified AutomationTransitionRes message. Does not implicitly {@link at.spg.protobuf.artemis.automation.AutomationTransitionRes.verify|verify} messages.
                         * @param message AutomationTransitionRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.automation.IAutomationTransitionRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AutomationTransitionRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.automation.AutomationTransitionRes.verify|verify} messages.
                         * @param message AutomationTransitionRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.automation.IAutomationTransitionRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AutomationTransitionRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AutomationTransitionRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.automation.AutomationTransitionRes;

                        /**
                         * Decodes an AutomationTransitionRes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AutomationTransitionRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.automation.AutomationTransitionRes;

                        /**
                         * Verifies an AutomationTransitionRes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AutomationTransitionRes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AutomationTransitionRes
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.automation.AutomationTransitionRes;

                        /**
                         * Creates a plain object from an AutomationTransitionRes message. Also converts values to other types if specified.
                         * @param message AutomationTransitionRes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.automation.AutomationTransitionRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AutomationTransitionRes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace common. */
                namespace common {

                    /** Properties of an AuditMsg. */
                    interface IAuditMsg {

                        /** AuditMsg created */
                        created?: (number|null);

                        /** AuditMsg modified */
                        modified?: (number|null);
                    }

                    /** Represents an AuditMsg. */
                    class AuditMsg implements IAuditMsg {

                        /**
                         * Constructs a new AuditMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.common.IAuditMsg);

                        /** AuditMsg created. */
                        public created: number;

                        /** AuditMsg modified. */
                        public modified: number;

                        /**
                         * Creates a new AuditMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AuditMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.common.IAuditMsg): at.spg.protobuf.artemis.common.AuditMsg;

                        /**
                         * Encodes the specified AuditMsg message. Does not implicitly {@link at.spg.protobuf.artemis.common.AuditMsg.verify|verify} messages.
                         * @param message AuditMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.common.IAuditMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AuditMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.common.AuditMsg.verify|verify} messages.
                         * @param message AuditMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.common.IAuditMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AuditMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AuditMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.common.AuditMsg;

                        /**
                         * Decodes an AuditMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AuditMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.common.AuditMsg;

                        /**
                         * Verifies an AuditMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AuditMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AuditMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.common.AuditMsg;

                        /**
                         * Creates a plain object from an AuditMsg message. Also converts values to other types if specified.
                         * @param message AuditMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.common.AuditMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AuditMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace remote. */
                namespace remote {

                    /** Namespace dielectric. */
                    namespace dielectric {

                        /** Represents a DielectricInjectPrinter */
                        class DielectricInjectPrinter extends $protobuf.rpc.Service {

                            /**
                             * Constructs a new DielectricInjectPrinter service.
                             * @param rpcImpl RPC implementation
                             * @param [requestDelimited=false] Whether requests are length-delimited
                             * @param [responseDelimited=false] Whether responses are length-delimited
                             */
                            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                            /**
                             * Creates new DielectricInjectPrinter service using the specified rpc implementation.
                             * @param rpcImpl RPC implementation
                             * @param [requestDelimited=false] Whether requests are length-delimited
                             * @param [responseDelimited=false] Whether responses are length-delimited
                             * @returns RPC service. Useful where requests and/or responses are streamed.
                             */
                            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DielectricInjectPrinter;

                            /**
                             * Calls Status.
                             * @param request StatusReq message or plain object
                             * @param callback Node-style callback called with the error, if any, and StatusRes
                             */
                            public status(request: at.spg.protobuf.artemis.remote.dielectric.IStatusReq, callback: at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter.StatusCallback): void;

                            /**
                             * Calls Status.
                             * @param request StatusReq message or plain object
                             * @returns Promise
                             */
                            public status(request: at.spg.protobuf.artemis.remote.dielectric.IStatusReq): Promise<at.spg.protobuf.artemis.remote.dielectric.StatusRes>;

                            /**
                             * Calls PrintSagaStatus.
                             * @param request StatusReq message or plain object
                             * @param callback Node-style callback called with the error, if any, and PrintSaga
                             */
                            public printSagaStatus(request: at.spg.protobuf.artemis.remote.dielectric.IStatusReq, callback: at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter.PrintSagaStatusCallback): void;

                            /**
                             * Calls PrintSagaStatus.
                             * @param request StatusReq message or plain object
                             * @returns Promise
                             */
                            public printSagaStatus(request: at.spg.protobuf.artemis.remote.dielectric.IStatusReq): Promise<at.spg.protobuf.artemis.remote.dielectric.PrintSaga>;

                            /**
                             * Calls Initialize.
                             * @param request InitializeReq message or plain object
                             * @param callback Node-style callback called with the error, if any, and InitializeRes
                             */
                            public initialize(request: at.spg.protobuf.artemis.remote.dielectric.IInitializeReq, callback: at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter.InitializeCallback): void;

                            /**
                             * Calls Initialize.
                             * @param request InitializeReq message or plain object
                             * @returns Promise
                             */
                            public initialize(request: at.spg.protobuf.artemis.remote.dielectric.IInitializeReq): Promise<at.spg.protobuf.artemis.remote.dielectric.InitializeRes>;

                            /**
                             * Calls PrepareForProcess.
                             * @param request PrepareReq message or plain object
                             * @param callback Node-style callback called with the error, if any, and PrepareRes
                             */
                            public prepareForProcess(request: at.spg.protobuf.artemis.remote.dielectric.IPrepareReq, callback: at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter.PrepareForProcessCallback): void;

                            /**
                             * Calls PrepareForProcess.
                             * @param request PrepareReq message or plain object
                             * @returns Promise
                             */
                            public prepareForProcess(request: at.spg.protobuf.artemis.remote.dielectric.IPrepareReq): Promise<at.spg.protobuf.artemis.remote.dielectric.PrepareRes>;

                            /**
                             * Calls DoWorkInArea.
                             * @param request DoWorkInAreaReq message or plain object
                             * @param callback Node-style callback called with the error, if any, and DoWorkInAreaRes
                             */
                            public doWorkInArea(request: at.spg.protobuf.artemis.remote.dielectric.IDoWorkInAreaReq, callback: at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter.DoWorkInAreaCallback): void;

                            /**
                             * Calls DoWorkInArea.
                             * @param request DoWorkInAreaReq message or plain object
                             * @returns Promise
                             */
                            public doWorkInArea(request: at.spg.protobuf.artemis.remote.dielectric.IDoWorkInAreaReq): Promise<at.spg.protobuf.artemis.remote.dielectric.DoWorkInAreaRes>;

                            /**
                             * Calls Presets.
                             * @param request PresetsReq message or plain object
                             * @param callback Node-style callback called with the error, if any, and PresetMsg
                             */
                            public presets(request: at.spg.protobuf.artemis.remote.dielectric.IPresetsReq, callback: at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter.PresetsCallback): void;

                            /**
                             * Calls Presets.
                             * @param request PresetsReq message or plain object
                             * @returns Promise
                             */
                            public presets(request: at.spg.protobuf.artemis.remote.dielectric.IPresetsReq): Promise<at.spg.protobuf.artemis.remote.dielectric.PresetMsg>;

                            /**
                             * Calls ManualMove.
                             * @param request ManualMoveReq message or plain object
                             * @param callback Node-style callback called with the error, if any, and ManualMoveRes
                             */
                            public manualMove(request: at.spg.protobuf.artemis.remote.dielectric.IManualMoveReq, callback: at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter.ManualMoveCallback): void;

                            /**
                             * Calls ManualMove.
                             * @param request ManualMoveReq message or plain object
                             * @returns Promise
                             */
                            public manualMove(request: at.spg.protobuf.artemis.remote.dielectric.IManualMoveReq): Promise<at.spg.protobuf.artemis.remote.dielectric.ManualMoveRes>;

                            /**
                             * Calls ToggleCameraLight.
                             * @param request ToggleCameraLightReq message or plain object
                             * @param callback Node-style callback called with the error, if any, and ToggleCameraLightRes
                             */
                            public toggleCameraLight(request: at.spg.protobuf.artemis.remote.dielectric.IToggleCameraLightReq, callback: at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter.ToggleCameraLightCallback): void;

                            /**
                             * Calls ToggleCameraLight.
                             * @param request ToggleCameraLightReq message or plain object
                             * @returns Promise
                             */
                            public toggleCameraLight(request: at.spg.protobuf.artemis.remote.dielectric.IToggleCameraLightReq): Promise<at.spg.protobuf.artemis.remote.dielectric.ToggleCameraLightRes>;

                            /**
                             * Calls RequestPrinterHeadState.
                             * @param request PrintHeadStateReq message or plain object
                             * @param callback Node-style callback called with the error, if any, and PrintHeadStateRes
                             */
                            public requestPrinterHeadState(request: at.spg.protobuf.artemis.remote.dielectric.IPrintHeadStateReq, callback: at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter.RequestPrinterHeadStateCallback): void;

                            /**
                             * Calls RequestPrinterHeadState.
                             * @param request PrintHeadStateReq message or plain object
                             * @returns Promise
                             */
                            public requestPrinterHeadState(request: at.spg.protobuf.artemis.remote.dielectric.IPrintHeadStateReq): Promise<at.spg.protobuf.artemis.remote.dielectric.PrintHeadStateRes>;

                            /**
                             * Calls Abort.
                             * @param request AbortReq message or plain object
                             * @param callback Node-style callback called with the error, if any, and AbortRes
                             */
                            public abort(request: at.spg.protobuf.artemis.remote.dielectric.IAbortReq, callback: at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter.AbortCallback): void;

                            /**
                             * Calls Abort.
                             * @param request AbortReq message or plain object
                             * @returns Promise
                             */
                            public abort(request: at.spg.protobuf.artemis.remote.dielectric.IAbortReq): Promise<at.spg.protobuf.artemis.remote.dielectric.AbortRes>;

                            /**
                             * Calls PreHeat.
                             * @param request PreHeatReq message or plain object
                             * @param callback Node-style callback called with the error, if any, and PreHeatRes
                             */
                            public preHeat(request: at.spg.protobuf.artemis.remote.dielectric.IPreHeatReq, callback: at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter.PreHeatCallback): void;

                            /**
                             * Calls PreHeat.
                             * @param request PreHeatReq message or plain object
                             * @returns Promise
                             */
                            public preHeat(request: at.spg.protobuf.artemis.remote.dielectric.IPreHeatReq): Promise<at.spg.protobuf.artemis.remote.dielectric.PreHeatRes>;

                            /**
                             * Calls Shutdown.
                             * @param request ShutdownReq message or plain object
                             * @param callback Node-style callback called with the error, if any, and ShutdownRes
                             */
                            public shutdown(request: at.spg.protobuf.artemis.remote.dielectric.IShutdownReq, callback: at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter.ShutdownCallback): void;

                            /**
                             * Calls Shutdown.
                             * @param request ShutdownReq message or plain object
                             * @returns Promise
                             */
                            public shutdown(request: at.spg.protobuf.artemis.remote.dielectric.IShutdownReq): Promise<at.spg.protobuf.artemis.remote.dielectric.ShutdownRes>;

                            /**
                             * Calls Spit.
                             * @param request SpitReq message or plain object
                             * @param callback Node-style callback called with the error, if any, and SpitRes
                             */
                            public spit(request: at.spg.protobuf.artemis.remote.dielectric.ISpitReq, callback: at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter.SpitCallback): void;

                            /**
                             * Calls Spit.
                             * @param request SpitReq message or plain object
                             * @returns Promise
                             */
                            public spit(request: at.spg.protobuf.artemis.remote.dielectric.ISpitReq): Promise<at.spg.protobuf.artemis.remote.dielectric.SpitRes>;

                            /**
                             * Calls ModifyCalibration.
                             * @param request ModifyCalibrationReq message or plain object
                             * @param callback Node-style callback called with the error, if any, and ModifyCalibrationRes
                             */
                            public modifyCalibration(request: at.spg.protobuf.artemis.remote.dielectric.IModifyCalibrationReq, callback: at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter.ModifyCalibrationCallback): void;

                            /**
                             * Calls ModifyCalibration.
                             * @param request ModifyCalibrationReq message or plain object
                             * @returns Promise
                             */
                            public modifyCalibration(request: at.spg.protobuf.artemis.remote.dielectric.IModifyCalibrationReq): Promise<at.spg.protobuf.artemis.remote.dielectric.ModifyCalibrationRes>;

                            /**
                             * Calls ModifyMeniscusPressure.
                             * @param request ModifyMeniscusPressureReq message or plain object
                             * @param callback Node-style callback called with the error, if any, and ModifyMeniscusPressureRes
                             */
                            public modifyMeniscusPressure(request: at.spg.protobuf.artemis.remote.dielectric.IModifyMeniscusPressureReq, callback: at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter.ModifyMeniscusPressureCallback): void;

                            /**
                             * Calls ModifyMeniscusPressure.
                             * @param request ModifyMeniscusPressureReq message or plain object
                             * @returns Promise
                             */
                            public modifyMeniscusPressure(request: at.spg.protobuf.artemis.remote.dielectric.IModifyMeniscusPressureReq): Promise<at.spg.protobuf.artemis.remote.dielectric.ModifyMeniscusPressureRes>;

                            /**
                             * Calls TakeSnapshot.
                             * @param request TakeSnapshotReq message or plain object
                             * @param callback Node-style callback called with the error, if any, and TakeSnapshotPayload
                             */
                            public takeSnapshot(request: at.spg.protobuf.artemis.remote.dielectric.ITakeSnapshotReq, callback: at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter.TakeSnapshotCallback): void;

                            /**
                             * Calls TakeSnapshot.
                             * @param request TakeSnapshotReq message or plain object
                             * @returns Promise
                             */
                            public takeSnapshot(request: at.spg.protobuf.artemis.remote.dielectric.ITakeSnapshotReq): Promise<at.spg.protobuf.artemis.remote.dielectric.TakeSnapshotPayload>;

                            /**
                             * Calls ConfigureFiducialDetection.
                             * @param request ConfigureFiducialDetectionReq message or plain object
                             * @param callback Node-style callback called with the error, if any, and ConfigureFiducialDetectionPayload
                             */
                            public configureFiducialDetection(request: at.spg.protobuf.artemis.remote.dielectric.IConfigureFiducialDetectionReq, callback: at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter.ConfigureFiducialDetectionCallback): void;

                            /**
                             * Calls ConfigureFiducialDetection.
                             * @param request ConfigureFiducialDetectionReq message or plain object
                             * @returns Promise
                             */
                            public configureFiducialDetection(request: at.spg.protobuf.artemis.remote.dielectric.IConfigureFiducialDetectionReq): Promise<at.spg.protobuf.artemis.remote.dielectric.ConfigureFiducialDetectionPayload>;

                            /**
                             * Calls WebRTCEndpoint.
                             * @param request WebRTCEvent message or plain object
                             * @param callback Node-style callback called with the error, if any, and WebRTCEvent
                             */
                            public webRTCEndpoint(request: at.spg.protobuf.artemis.webrtc.IWebRTCEvent, callback: at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter.WebRTCEndpointCallback): void;

                            /**
                             * Calls WebRTCEndpoint.
                             * @param request WebRTCEvent message or plain object
                             * @returns Promise
                             */
                            public webRTCEndpoint(request: at.spg.protobuf.artemis.webrtc.IWebRTCEvent): Promise<at.spg.protobuf.artemis.webrtc.WebRTCEvent>;
                        }

                        namespace DielectricInjectPrinter {

                            /**
                             * Callback as used by {@link at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter#status}.
                             * @param error Error, if any
                             * @param [response] StatusRes
                             */
                            type StatusCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.remote.dielectric.StatusRes) => void;

                            /**
                             * Callback as used by {@link at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter#printSagaStatus}.
                             * @param error Error, if any
                             * @param [response] PrintSaga
                             */
                            type PrintSagaStatusCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.remote.dielectric.PrintSaga) => void;

                            /**
                             * Callback as used by {@link at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter#initialize}.
                             * @param error Error, if any
                             * @param [response] InitializeRes
                             */
                            type InitializeCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.remote.dielectric.InitializeRes) => void;

                            /**
                             * Callback as used by {@link at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter#prepareForProcess}.
                             * @param error Error, if any
                             * @param [response] PrepareRes
                             */
                            type PrepareForProcessCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.remote.dielectric.PrepareRes) => void;

                            /**
                             * Callback as used by {@link at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter#doWorkInArea}.
                             * @param error Error, if any
                             * @param [response] DoWorkInAreaRes
                             */
                            type DoWorkInAreaCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.remote.dielectric.DoWorkInAreaRes) => void;

                            /**
                             * Callback as used by {@link at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter#presets}.
                             * @param error Error, if any
                             * @param [response] PresetMsg
                             */
                            type PresetsCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.remote.dielectric.PresetMsg) => void;

                            /**
                             * Callback as used by {@link at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter#manualMove}.
                             * @param error Error, if any
                             * @param [response] ManualMoveRes
                             */
                            type ManualMoveCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.remote.dielectric.ManualMoveRes) => void;

                            /**
                             * Callback as used by {@link at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter#toggleCameraLight}.
                             * @param error Error, if any
                             * @param [response] ToggleCameraLightRes
                             */
                            type ToggleCameraLightCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.remote.dielectric.ToggleCameraLightRes) => void;

                            /**
                             * Callback as used by {@link at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter#requestPrinterHeadState}.
                             * @param error Error, if any
                             * @param [response] PrintHeadStateRes
                             */
                            type RequestPrinterHeadStateCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.remote.dielectric.PrintHeadStateRes) => void;

                            /**
                             * Callback as used by {@link at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter#abort}.
                             * @param error Error, if any
                             * @param [response] AbortRes
                             */
                            type AbortCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.remote.dielectric.AbortRes) => void;

                            /**
                             * Callback as used by {@link at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter#preHeat}.
                             * @param error Error, if any
                             * @param [response] PreHeatRes
                             */
                            type PreHeatCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.remote.dielectric.PreHeatRes) => void;

                            /**
                             * Callback as used by {@link at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter#shutdown}.
                             * @param error Error, if any
                             * @param [response] ShutdownRes
                             */
                            type ShutdownCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.remote.dielectric.ShutdownRes) => void;

                            /**
                             * Callback as used by {@link at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter#spit}.
                             * @param error Error, if any
                             * @param [response] SpitRes
                             */
                            type SpitCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.remote.dielectric.SpitRes) => void;

                            /**
                             * Callback as used by {@link at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter#modifyCalibration}.
                             * @param error Error, if any
                             * @param [response] ModifyCalibrationRes
                             */
                            type ModifyCalibrationCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.remote.dielectric.ModifyCalibrationRes) => void;

                            /**
                             * Callback as used by {@link at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter#modifyMeniscusPressure}.
                             * @param error Error, if any
                             * @param [response] ModifyMeniscusPressureRes
                             */
                            type ModifyMeniscusPressureCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.remote.dielectric.ModifyMeniscusPressureRes) => void;

                            /**
                             * Callback as used by {@link at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter#takeSnapshot}.
                             * @param error Error, if any
                             * @param [response] TakeSnapshotPayload
                             */
                            type TakeSnapshotCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.remote.dielectric.TakeSnapshotPayload) => void;

                            /**
                             * Callback as used by {@link at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter#configureFiducialDetection}.
                             * @param error Error, if any
                             * @param [response] ConfigureFiducialDetectionPayload
                             */
                            type ConfigureFiducialDetectionCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.remote.dielectric.ConfigureFiducialDetectionPayload) => void;

                            /**
                             * Callback as used by {@link at.spg.protobuf.artemis.remote.dielectric.DielectricInjectPrinter#webRTCEndpoint}.
                             * @param error Error, if any
                             * @param [response] WebRTCEvent
                             */
                            type WebRTCEndpointCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.webrtc.WebRTCEvent) => void;
                        }

                        /** PrintHeadState enum. */
                        enum PrintHeadState {
                            UndefinedHeadState = 0,
                            Standby = 1,
                            Print = 2,
                            Fill = 3,
                            Purge = 4,
                            Degas = 5,
                            Drain = 6
                        }

                        /** PrinterState enum. */
                        enum PrinterState {
                            Undefined = 0,
                            NotReady = 1,
                            StandingBy = 2,
                            InitialzingComponents = 3,
                            PreparingForProcess = 4,
                            ManualMoving = 5,
                            ReadyToPrint = 6,
                            Printing = 7,
                            Purging = 8,
                            Spitting = 9,
                            UnhandledError = 15
                        }

                        /** Properties of a StatusReq. */
                        interface IStatusReq {

                            /** StatusReq multiple */
                            multiple?: (boolean|null);

                            /** StatusReq intervalMs */
                            intervalMs?: (number|null);
                        }

                        /** Represents a StatusReq. */
                        class StatusReq implements IStatusReq {

                            /**
                             * Constructs a new StatusReq.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IStatusReq);

                            /** StatusReq multiple. */
                            public multiple: boolean;

                            /** StatusReq intervalMs. */
                            public intervalMs: number;

                            /**
                             * Creates a new StatusReq instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns StatusReq instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IStatusReq): at.spg.protobuf.artemis.remote.dielectric.StatusReq;

                            /**
                             * Encodes the specified StatusReq message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.StatusReq.verify|verify} messages.
                             * @param message StatusReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IStatusReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified StatusReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.StatusReq.verify|verify} messages.
                             * @param message StatusReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IStatusReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a StatusReq message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns StatusReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.StatusReq;

                            /**
                             * Decodes a StatusReq message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns StatusReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.StatusReq;

                            /**
                             * Verifies a StatusReq message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a StatusReq message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns StatusReq
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.StatusReq;

                            /**
                             * Creates a plain object from a StatusReq message. Also converts values to other types if specified.
                             * @param message StatusReq
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.StatusReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this StatusReq to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a StatusRes. */
                        interface IStatusRes {

                            /** StatusRes timestamp */
                            timestamp?: (number|null);

                            /** StatusRes state */
                            state?: (at.spg.protobuf.artemis.remote.dielectric.PrinterState|null);

                            /** StatusRes axisXMm */
                            axisXMm?: (number|null);

                            /** StatusRes axisYMm */
                            axisYMm?: (number|null);

                            /** StatusRes cameraXMm */
                            cameraXMm?: (number|null);

                            /** StatusRes cameraYMm */
                            cameraYMm?: (number|null);

                            /** StatusRes headState */
                            headState?: (at.spg.protobuf.artemis.remote.dielectric.PrintHeadState|null);

                            /** StatusRes cameraLight */
                            cameraLight?: (boolean|null);

                            /** StatusRes pinningOn */
                            pinningOn?: (boolean|null);

                            /** StatusRes pinningPower */
                            pinningPower?: (number|null);

                            /** StatusRes headTemp */
                            headTemp?: (number|null);

                            /** StatusRes mountTemp_1 */
                            mountTemp_1?: (number|null);

                            /** StatusRes mountTemp_2 */
                            mountTemp_2?: (number|null);

                            /** StatusRes ineltTemp */
                            ineltTemp?: (number|null);

                            /** StatusRes inkLevel */
                            inkLevel?: (number|null);

                            /** StatusRes inkDensity */
                            inkDensity?: (number|null);

                            /** StatusRes pressureOffset */
                            pressureOffset?: (number|null);

                            /** StatusRes pressure */
                            pressure?: (number|null);

                            /** StatusRes templateBackgroundColor */
                            templateBackgroundColor?: (number|null);

                            /** StatusRes templateForegroundColor */
                            templateForegroundColor?: (number|null);

                            /** StatusRes confidenceCutoff */
                            confidenceCutoff?: (number|null);

                            /** StatusRes cameraExposureTime */
                            cameraExposureTime?: (number|null);

                            /** StatusRes cameraGain */
                            cameraGain?: (number|null);
                        }

                        /** Represents a StatusRes. */
                        class StatusRes implements IStatusRes {

                            /**
                             * Constructs a new StatusRes.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IStatusRes);

                            /** StatusRes timestamp. */
                            public timestamp: number;

                            /** StatusRes state. */
                            public state: at.spg.protobuf.artemis.remote.dielectric.PrinterState;

                            /** StatusRes axisXMm. */
                            public axisXMm: number;

                            /** StatusRes axisYMm. */
                            public axisYMm: number;

                            /** StatusRes cameraXMm. */
                            public cameraXMm: number;

                            /** StatusRes cameraYMm. */
                            public cameraYMm: number;

                            /** StatusRes headState. */
                            public headState: at.spg.protobuf.artemis.remote.dielectric.PrintHeadState;

                            /** StatusRes cameraLight. */
                            public cameraLight: boolean;

                            /** StatusRes pinningOn. */
                            public pinningOn: boolean;

                            /** StatusRes pinningPower. */
                            public pinningPower: number;

                            /** StatusRes headTemp. */
                            public headTemp: number;

                            /** StatusRes mountTemp_1. */
                            public mountTemp_1: number;

                            /** StatusRes mountTemp_2. */
                            public mountTemp_2: number;

                            /** StatusRes ineltTemp. */
                            public ineltTemp: number;

                            /** StatusRes inkLevel. */
                            public inkLevel: number;

                            /** StatusRes inkDensity. */
                            public inkDensity: number;

                            /** StatusRes pressureOffset. */
                            public pressureOffset: number;

                            /** StatusRes pressure. */
                            public pressure: number;

                            /** StatusRes templateBackgroundColor. */
                            public templateBackgroundColor: number;

                            /** StatusRes templateForegroundColor. */
                            public templateForegroundColor: number;

                            /** StatusRes confidenceCutoff. */
                            public confidenceCutoff: number;

                            /** StatusRes cameraExposureTime. */
                            public cameraExposureTime: number;

                            /** StatusRes cameraGain. */
                            public cameraGain: number;

                            /**
                             * Creates a new StatusRes instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns StatusRes instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IStatusRes): at.spg.protobuf.artemis.remote.dielectric.StatusRes;

                            /**
                             * Encodes the specified StatusRes message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.StatusRes.verify|verify} messages.
                             * @param message StatusRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IStatusRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified StatusRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.StatusRes.verify|verify} messages.
                             * @param message StatusRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IStatusRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a StatusRes message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns StatusRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.StatusRes;

                            /**
                             * Decodes a StatusRes message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns StatusRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.StatusRes;

                            /**
                             * Verifies a StatusRes message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a StatusRes message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns StatusRes
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.StatusRes;

                            /**
                             * Creates a plain object from a StatusRes message. Also converts values to other types if specified.
                             * @param message StatusRes
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.StatusRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this StatusRes to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** PrintSagaStep enum. */
                        enum PrintSagaStep {
                            SagaUndefined = 0,
                            SagaWaitingForTargetTemperatures = 1,
                            SagaPurging = 2,
                            SagaAligning = 3,
                            SagaPrinting = 4,
                            SagaCompleted = 5,
                            SagaFailed = 6
                        }

                        /** Properties of a PrintSaga. */
                        interface IPrintSaga {

                            /** PrintSaga timestamp */
                            timestamp?: (number|null);

                            /** PrintSaga step */
                            step?: (at.spg.protobuf.artemis.remote.dielectric.PrintSagaStep|null);

                            /** PrintSaga printId */
                            printId?: (string|null);

                            /** PrintSaga printRequest */
                            printRequest?: (at.spg.protobuf.artemis.remote.dielectric.IDoWorkInAreaReq|null);

                            /** PrintSaga failReason */
                            failReason?: (string|null);

                            /** PrintSaga affineTransform */
                            affineTransform?: (number[]|null);
                        }

                        /** Represents a PrintSaga. */
                        class PrintSaga implements IPrintSaga {

                            /**
                             * Constructs a new PrintSaga.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IPrintSaga);

                            /** PrintSaga timestamp. */
                            public timestamp: number;

                            /** PrintSaga step. */
                            public step: at.spg.protobuf.artemis.remote.dielectric.PrintSagaStep;

                            /** PrintSaga printId. */
                            public printId: string;

                            /** PrintSaga printRequest. */
                            public printRequest?: (at.spg.protobuf.artemis.remote.dielectric.IDoWorkInAreaReq|null);

                            /** PrintSaga failReason. */
                            public failReason?: (string|null);

                            /** PrintSaga affineTransform. */
                            public affineTransform: number[];

                            /** PrintSaga _failReason. */
                            public _failReason?: "failReason";

                            /**
                             * Creates a new PrintSaga instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PrintSaga instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IPrintSaga): at.spg.protobuf.artemis.remote.dielectric.PrintSaga;

                            /**
                             * Encodes the specified PrintSaga message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.PrintSaga.verify|verify} messages.
                             * @param message PrintSaga message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IPrintSaga, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PrintSaga message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.PrintSaga.verify|verify} messages.
                             * @param message PrintSaga message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IPrintSaga, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PrintSaga message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PrintSaga
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.PrintSaga;

                            /**
                             * Decodes a PrintSaga message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PrintSaga
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.PrintSaga;

                            /**
                             * Verifies a PrintSaga message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PrintSaga message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PrintSaga
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.PrintSaga;

                            /**
                             * Creates a plain object from a PrintSaga message. Also converts values to other types if specified.
                             * @param message PrintSaga
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.PrintSaga, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PrintSaga to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an InitializeReq. */
                        interface IInitializeReq {
                        }

                        /** Represents an InitializeReq. */
                        class InitializeReq implements IInitializeReq {

                            /**
                             * Constructs a new InitializeReq.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IInitializeReq);

                            /**
                             * Creates a new InitializeReq instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns InitializeReq instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IInitializeReq): at.spg.protobuf.artemis.remote.dielectric.InitializeReq;

                            /**
                             * Encodes the specified InitializeReq message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.InitializeReq.verify|verify} messages.
                             * @param message InitializeReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IInitializeReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified InitializeReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.InitializeReq.verify|verify} messages.
                             * @param message InitializeReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IInitializeReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an InitializeReq message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns InitializeReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.InitializeReq;

                            /**
                             * Decodes an InitializeReq message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns InitializeReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.InitializeReq;

                            /**
                             * Verifies an InitializeReq message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an InitializeReq message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns InitializeReq
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.InitializeReq;

                            /**
                             * Creates a plain object from an InitializeReq message. Also converts values to other types if specified.
                             * @param message InitializeReq
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.InitializeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this InitializeReq to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an InitializeRes. */
                        interface IInitializeRes {
                        }

                        /** Represents an InitializeRes. */
                        class InitializeRes implements IInitializeRes {

                            /**
                             * Constructs a new InitializeRes.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IInitializeRes);

                            /**
                             * Creates a new InitializeRes instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns InitializeRes instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IInitializeRes): at.spg.protobuf.artemis.remote.dielectric.InitializeRes;

                            /**
                             * Encodes the specified InitializeRes message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.InitializeRes.verify|verify} messages.
                             * @param message InitializeRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IInitializeRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified InitializeRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.InitializeRes.verify|verify} messages.
                             * @param message InitializeRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IInitializeRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an InitializeRes message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns InitializeRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.InitializeRes;

                            /**
                             * Decodes an InitializeRes message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns InitializeRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.InitializeRes;

                            /**
                             * Verifies an InitializeRes message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an InitializeRes message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns InitializeRes
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.InitializeRes;

                            /**
                             * Creates a plain object from an InitializeRes message. Also converts values to other types if specified.
                             * @param message InitializeRes
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.InitializeRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this InitializeRes to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a PrepareReq. */
                        interface IPrepareReq {

                            /** PrepareReq printPresetId */
                            printPresetId?: (number|null);
                        }

                        /** Represents a PrepareReq. */
                        class PrepareReq implements IPrepareReq {

                            /**
                             * Constructs a new PrepareReq.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IPrepareReq);

                            /** PrepareReq printPresetId. */
                            public printPresetId: number;

                            /**
                             * Creates a new PrepareReq instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PrepareReq instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IPrepareReq): at.spg.protobuf.artemis.remote.dielectric.PrepareReq;

                            /**
                             * Encodes the specified PrepareReq message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.PrepareReq.verify|verify} messages.
                             * @param message PrepareReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IPrepareReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PrepareReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.PrepareReq.verify|verify} messages.
                             * @param message PrepareReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IPrepareReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PrepareReq message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PrepareReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.PrepareReq;

                            /**
                             * Decodes a PrepareReq message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PrepareReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.PrepareReq;

                            /**
                             * Verifies a PrepareReq message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PrepareReq message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PrepareReq
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.PrepareReq;

                            /**
                             * Creates a plain object from a PrepareReq message. Also converts values to other types if specified.
                             * @param message PrepareReq
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.PrepareReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PrepareReq to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a PrepareRes. */
                        interface IPrepareRes {
                        }

                        /** Represents a PrepareRes. */
                        class PrepareRes implements IPrepareRes {

                            /**
                             * Constructs a new PrepareRes.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IPrepareRes);

                            /**
                             * Creates a new PrepareRes instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PrepareRes instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IPrepareRes): at.spg.protobuf.artemis.remote.dielectric.PrepareRes;

                            /**
                             * Encodes the specified PrepareRes message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.PrepareRes.verify|verify} messages.
                             * @param message PrepareRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IPrepareRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PrepareRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.PrepareRes.verify|verify} messages.
                             * @param message PrepareRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IPrepareRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PrepareRes message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PrepareRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.PrepareRes;

                            /**
                             * Decodes a PrepareRes message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PrepareRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.PrepareRes;

                            /**
                             * Verifies a PrepareRes message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PrepareRes message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PrepareRes
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.PrepareRes;

                            /**
                             * Creates a plain object from a PrepareRes message. Also converts values to other types if specified.
                             * @param message PrepareRes
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.PrepareRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PrepareRes to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** DpiSettings enum. */
                        enum DpiSettings {
                            UndefinedDpi = 0,
                            Dpi360 = 1,
                            Dpi720 = 2,
                            Dpi1080 = 3
                        }

                        /** AlignmentMethod enum. */
                        enum AlignmentMethod {
                            ALIGNMENT_METHOD_UNSPECIFIED = 0,
                            ALIGNMENT_METHOD_THREEPOINT = 1,
                            ALIGNMENT_METHOD_TWO_POINT_X = 2,
                            ALIGNMENT_METHOD_TWO_POINT_Y = 3
                        }

                        /** FiducialType enum. */
                        enum FiducialType {
                            FIDUCIAL_TYPE_UNSPECIFIED = 0,
                            FIDUCIAL_TYPE_HASH = 1,
                            FIDUCIAL_TYPE_RECT = 2,
                            FIDUCIAL_TYPE_IMAGE = 3
                        }

                        /** Properties of a FiducialDetectConfig. */
                        interface IFiducialDetectConfig {

                            /** FiducialDetectConfig type */
                            type?: (at.spg.protobuf.artemis.remote.dielectric.FiducialType|null);

                            /** FiducialDetectConfig imagePath */
                            imagePath?: (string|null);
                        }

                        /** Represents a FiducialDetectConfig. */
                        class FiducialDetectConfig implements IFiducialDetectConfig {

                            /**
                             * Constructs a new FiducialDetectConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IFiducialDetectConfig);

                            /** FiducialDetectConfig type. */
                            public type: at.spg.protobuf.artemis.remote.dielectric.FiducialType;

                            /** FiducialDetectConfig imagePath. */
                            public imagePath?: (string|null);

                            /** FiducialDetectConfig _imagePath. */
                            public _imagePath?: "imagePath";

                            /**
                             * Creates a new FiducialDetectConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns FiducialDetectConfig instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IFiducialDetectConfig): at.spg.protobuf.artemis.remote.dielectric.FiducialDetectConfig;

                            /**
                             * Encodes the specified FiducialDetectConfig message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.FiducialDetectConfig.verify|verify} messages.
                             * @param message FiducialDetectConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IFiducialDetectConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified FiducialDetectConfig message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.FiducialDetectConfig.verify|verify} messages.
                             * @param message FiducialDetectConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IFiducialDetectConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a FiducialDetectConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns FiducialDetectConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.FiducialDetectConfig;

                            /**
                             * Decodes a FiducialDetectConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns FiducialDetectConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.FiducialDetectConfig;

                            /**
                             * Verifies a FiducialDetectConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a FiducialDetectConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns FiducialDetectConfig
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.FiducialDetectConfig;

                            /**
                             * Creates a plain object from a FiducialDetectConfig message. Also converts values to other types if specified.
                             * @param message FiducialDetectConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.FiducialDetectConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this FiducialDetectConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a DoWorkInAreaReq. */
                        interface IDoWorkInAreaReq {

                            /** DoWorkInAreaReq fiducials */
                            fiducials?: ({ [k: string]: at.spg.protobuf.artemis.process.IFiducialMsg }|null);

                            /** DoWorkInAreaReq objects */
                            objects?: (at.spg.protobuf.artemis.process.IProcessObjectMsg[]|null);

                            /** DoWorkInAreaReq purgeTimeS */
                            purgeTimeS?: (number|null);

                            /** DoWorkInAreaReq pinningPower */
                            pinningPower?: (number|null);

                            /** DoWorkInAreaReq skipAlignment */
                            skipAlignment?: (boolean|null);

                            /** DoWorkInAreaReq skipPrinting */
                            skipPrinting?: (boolean|null);

                            /** DoWorkInAreaReq dpiX */
                            dpiX?: (at.spg.protobuf.artemis.remote.dielectric.DpiSettings|null);

                            /** DoWorkInAreaReq dpiY */
                            dpiY?: (at.spg.protobuf.artemis.remote.dielectric.DpiSettings|null);

                            /** DoWorkInAreaReq spitVoltage */
                            spitVoltage?: (number|null);

                            /** DoWorkInAreaReq AlignmentMethod */
                            AlignmentMethod?: (at.spg.protobuf.artemis.remote.dielectric.AlignmentMethod|null);

                            /** DoWorkInAreaReq targetBatch */
                            targetBatch?: (string|null);

                            /** DoWorkInAreaReq comment */
                            comment?: (string|null);

                            /** DoWorkInAreaReq fiducialConfig */
                            fiducialConfig?: (at.spg.protobuf.artemis.remote.dielectric.IFiducialDetectConfig|null);
                        }

                        /** Represents a DoWorkInAreaReq. */
                        class DoWorkInAreaReq implements IDoWorkInAreaReq {

                            /**
                             * Constructs a new DoWorkInAreaReq.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IDoWorkInAreaReq);

                            /** DoWorkInAreaReq fiducials. */
                            public fiducials: { [k: string]: at.spg.protobuf.artemis.process.IFiducialMsg };

                            /** DoWorkInAreaReq objects. */
                            public objects: at.spg.protobuf.artemis.process.IProcessObjectMsg[];

                            /** DoWorkInAreaReq purgeTimeS. */
                            public purgeTimeS: number;

                            /** DoWorkInAreaReq pinningPower. */
                            public pinningPower: number;

                            /** DoWorkInAreaReq skipAlignment. */
                            public skipAlignment: boolean;

                            /** DoWorkInAreaReq skipPrinting. */
                            public skipPrinting: boolean;

                            /** DoWorkInAreaReq dpiX. */
                            public dpiX: at.spg.protobuf.artemis.remote.dielectric.DpiSettings;

                            /** DoWorkInAreaReq dpiY. */
                            public dpiY: at.spg.protobuf.artemis.remote.dielectric.DpiSettings;

                            /** DoWorkInAreaReq spitVoltage. */
                            public spitVoltage: number;

                            /** DoWorkInAreaReq AlignmentMethod. */
                            public AlignmentMethod: at.spg.protobuf.artemis.remote.dielectric.AlignmentMethod;

                            /** DoWorkInAreaReq targetBatch. */
                            public targetBatch: string;

                            /** DoWorkInAreaReq comment. */
                            public comment: string;

                            /** DoWorkInAreaReq fiducialConfig. */
                            public fiducialConfig?: (at.spg.protobuf.artemis.remote.dielectric.IFiducialDetectConfig|null);

                            /**
                             * Creates a new DoWorkInAreaReq instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns DoWorkInAreaReq instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IDoWorkInAreaReq): at.spg.protobuf.artemis.remote.dielectric.DoWorkInAreaReq;

                            /**
                             * Encodes the specified DoWorkInAreaReq message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.DoWorkInAreaReq.verify|verify} messages.
                             * @param message DoWorkInAreaReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IDoWorkInAreaReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified DoWorkInAreaReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.DoWorkInAreaReq.verify|verify} messages.
                             * @param message DoWorkInAreaReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IDoWorkInAreaReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a DoWorkInAreaReq message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns DoWorkInAreaReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.DoWorkInAreaReq;

                            /**
                             * Decodes a DoWorkInAreaReq message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns DoWorkInAreaReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.DoWorkInAreaReq;

                            /**
                             * Verifies a DoWorkInAreaReq message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a DoWorkInAreaReq message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns DoWorkInAreaReq
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.DoWorkInAreaReq;

                            /**
                             * Creates a plain object from a DoWorkInAreaReq message. Also converts values to other types if specified.
                             * @param message DoWorkInAreaReq
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.DoWorkInAreaReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this DoWorkInAreaReq to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a DoWorkInAreaRes. */
                        interface IDoWorkInAreaRes {

                            /** DoWorkInAreaRes correctedFiducials */
                            correctedFiducials?: ({ [k: string]: at.spg.protobuf.artemis.process.IFiducialMsg }|null);
                        }

                        /** Represents a DoWorkInAreaRes. */
                        class DoWorkInAreaRes implements IDoWorkInAreaRes {

                            /**
                             * Constructs a new DoWorkInAreaRes.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IDoWorkInAreaRes);

                            /** DoWorkInAreaRes correctedFiducials. */
                            public correctedFiducials: { [k: string]: at.spg.protobuf.artemis.process.IFiducialMsg };

                            /**
                             * Creates a new DoWorkInAreaRes instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns DoWorkInAreaRes instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IDoWorkInAreaRes): at.spg.protobuf.artemis.remote.dielectric.DoWorkInAreaRes;

                            /**
                             * Encodes the specified DoWorkInAreaRes message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.DoWorkInAreaRes.verify|verify} messages.
                             * @param message DoWorkInAreaRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IDoWorkInAreaRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified DoWorkInAreaRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.DoWorkInAreaRes.verify|verify} messages.
                             * @param message DoWorkInAreaRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IDoWorkInAreaRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a DoWorkInAreaRes message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns DoWorkInAreaRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.DoWorkInAreaRes;

                            /**
                             * Decodes a DoWorkInAreaRes message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns DoWorkInAreaRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.DoWorkInAreaRes;

                            /**
                             * Verifies a DoWorkInAreaRes message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a DoWorkInAreaRes message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns DoWorkInAreaRes
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.DoWorkInAreaRes;

                            /**
                             * Creates a plain object from a DoWorkInAreaRes message. Also converts values to other types if specified.
                             * @param message DoWorkInAreaRes
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.DoWorkInAreaRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this DoWorkInAreaRes to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a PresetsReq. */
                        interface IPresetsReq {
                        }

                        /** Represents a PresetsReq. */
                        class PresetsReq implements IPresetsReq {

                            /**
                             * Constructs a new PresetsReq.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IPresetsReq);

                            /**
                             * Creates a new PresetsReq instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PresetsReq instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IPresetsReq): at.spg.protobuf.artemis.remote.dielectric.PresetsReq;

                            /**
                             * Encodes the specified PresetsReq message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.PresetsReq.verify|verify} messages.
                             * @param message PresetsReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IPresetsReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PresetsReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.PresetsReq.verify|verify} messages.
                             * @param message PresetsReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IPresetsReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PresetsReq message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PresetsReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.PresetsReq;

                            /**
                             * Decodes a PresetsReq message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PresetsReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.PresetsReq;

                            /**
                             * Verifies a PresetsReq message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PresetsReq message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PresetsReq
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.PresetsReq;

                            /**
                             * Creates a plain object from a PresetsReq message. Also converts values to other types if specified.
                             * @param message PresetsReq
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.PresetsReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PresetsReq to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a PresetMsg. */
                        interface IPresetMsg {

                            /** PresetMsg id */
                            id?: (number|null);

                            /** PresetMsg name */
                            name?: (string|null);
                        }

                        /** Represents a PresetMsg. */
                        class PresetMsg implements IPresetMsg {

                            /**
                             * Constructs a new PresetMsg.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IPresetMsg);

                            /** PresetMsg id. */
                            public id: number;

                            /** PresetMsg name. */
                            public name: string;

                            /**
                             * Creates a new PresetMsg instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PresetMsg instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IPresetMsg): at.spg.protobuf.artemis.remote.dielectric.PresetMsg;

                            /**
                             * Encodes the specified PresetMsg message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.PresetMsg.verify|verify} messages.
                             * @param message PresetMsg message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IPresetMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PresetMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.PresetMsg.verify|verify} messages.
                             * @param message PresetMsg message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IPresetMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PresetMsg message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PresetMsg
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.PresetMsg;

                            /**
                             * Decodes a PresetMsg message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PresetMsg
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.PresetMsg;

                            /**
                             * Verifies a PresetMsg message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PresetMsg message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PresetMsg
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.PresetMsg;

                            /**
                             * Creates a plain object from a PresetMsg message. Also converts values to other types if specified.
                             * @param message PresetMsg
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.PresetMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PresetMsg to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ManualMoveReq. */
                        interface IManualMoveReq {

                            /** ManualMoveReq position */
                            position?: (at.spg.protobuf.artemis.process.IVertexMsg|null);

                            /** ManualMoveReq speed */
                            speed?: (number|null);

                            /** ManualMoveReq acceleration */
                            acceleration?: (number|null);
                        }

                        /** Represents a ManualMoveReq. */
                        class ManualMoveReq implements IManualMoveReq {

                            /**
                             * Constructs a new ManualMoveReq.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IManualMoveReq);

                            /** ManualMoveReq position. */
                            public position?: (at.spg.protobuf.artemis.process.IVertexMsg|null);

                            /** ManualMoveReq speed. */
                            public speed?: (number|null);

                            /** ManualMoveReq acceleration. */
                            public acceleration?: (number|null);

                            /** ManualMoveReq _speed. */
                            public _speed?: "speed";

                            /** ManualMoveReq _acceleration. */
                            public _acceleration?: "acceleration";

                            /**
                             * Creates a new ManualMoveReq instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ManualMoveReq instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IManualMoveReq): at.spg.protobuf.artemis.remote.dielectric.ManualMoveReq;

                            /**
                             * Encodes the specified ManualMoveReq message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ManualMoveReq.verify|verify} messages.
                             * @param message ManualMoveReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IManualMoveReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ManualMoveReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ManualMoveReq.verify|verify} messages.
                             * @param message ManualMoveReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IManualMoveReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ManualMoveReq message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ManualMoveReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.ManualMoveReq;

                            /**
                             * Decodes a ManualMoveReq message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ManualMoveReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.ManualMoveReq;

                            /**
                             * Verifies a ManualMoveReq message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ManualMoveReq message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ManualMoveReq
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.ManualMoveReq;

                            /**
                             * Creates a plain object from a ManualMoveReq message. Also converts values to other types if specified.
                             * @param message ManualMoveReq
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.ManualMoveReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ManualMoveReq to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ManualMoveRes. */
                        interface IManualMoveRes {
                        }

                        /** Represents a ManualMoveRes. */
                        class ManualMoveRes implements IManualMoveRes {

                            /**
                             * Constructs a new ManualMoveRes.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IManualMoveRes);

                            /**
                             * Creates a new ManualMoveRes instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ManualMoveRes instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IManualMoveRes): at.spg.protobuf.artemis.remote.dielectric.ManualMoveRes;

                            /**
                             * Encodes the specified ManualMoveRes message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ManualMoveRes.verify|verify} messages.
                             * @param message ManualMoveRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IManualMoveRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ManualMoveRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ManualMoveRes.verify|verify} messages.
                             * @param message ManualMoveRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IManualMoveRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ManualMoveRes message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ManualMoveRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.ManualMoveRes;

                            /**
                             * Decodes a ManualMoveRes message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ManualMoveRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.ManualMoveRes;

                            /**
                             * Verifies a ManualMoveRes message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ManualMoveRes message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ManualMoveRes
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.ManualMoveRes;

                            /**
                             * Creates a plain object from a ManualMoveRes message. Also converts values to other types if specified.
                             * @param message ManualMoveRes
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.ManualMoveRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ManualMoveRes to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ShutdownReq. */
                        interface IShutdownReq {

                            /** ShutdownReq axis */
                            axis?: (boolean|null);

                            /** ShutdownReq printHead */
                            printHead?: (boolean|null);
                        }

                        /** Represents a ShutdownReq. */
                        class ShutdownReq implements IShutdownReq {

                            /**
                             * Constructs a new ShutdownReq.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IShutdownReq);

                            /** ShutdownReq axis. */
                            public axis: boolean;

                            /** ShutdownReq printHead. */
                            public printHead: boolean;

                            /**
                             * Creates a new ShutdownReq instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ShutdownReq instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IShutdownReq): at.spg.protobuf.artemis.remote.dielectric.ShutdownReq;

                            /**
                             * Encodes the specified ShutdownReq message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ShutdownReq.verify|verify} messages.
                             * @param message ShutdownReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IShutdownReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ShutdownReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ShutdownReq.verify|verify} messages.
                             * @param message ShutdownReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IShutdownReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ShutdownReq message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ShutdownReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.ShutdownReq;

                            /**
                             * Decodes a ShutdownReq message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ShutdownReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.ShutdownReq;

                            /**
                             * Verifies a ShutdownReq message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ShutdownReq message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ShutdownReq
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.ShutdownReq;

                            /**
                             * Creates a plain object from a ShutdownReq message. Also converts values to other types if specified.
                             * @param message ShutdownReq
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.ShutdownReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ShutdownReq to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ShutdownRes. */
                        interface IShutdownRes {
                        }

                        /** Represents a ShutdownRes. */
                        class ShutdownRes implements IShutdownRes {

                            /**
                             * Constructs a new ShutdownRes.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IShutdownRes);

                            /**
                             * Creates a new ShutdownRes instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ShutdownRes instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IShutdownRes): at.spg.protobuf.artemis.remote.dielectric.ShutdownRes;

                            /**
                             * Encodes the specified ShutdownRes message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ShutdownRes.verify|verify} messages.
                             * @param message ShutdownRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IShutdownRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ShutdownRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ShutdownRes.verify|verify} messages.
                             * @param message ShutdownRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IShutdownRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ShutdownRes message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ShutdownRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.ShutdownRes;

                            /**
                             * Decodes a ShutdownRes message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ShutdownRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.ShutdownRes;

                            /**
                             * Verifies a ShutdownRes message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ShutdownRes message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ShutdownRes
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.ShutdownRes;

                            /**
                             * Creates a plain object from a ShutdownRes message. Also converts values to other types if specified.
                             * @param message ShutdownRes
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.ShutdownRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ShutdownRes to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a PrintHeadStateReq. */
                        interface IPrintHeadStateReq {

                            /** PrintHeadStateReq state */
                            state?: (at.spg.protobuf.artemis.remote.dielectric.PrintHeadState|null);
                        }

                        /** Represents a PrintHeadStateReq. */
                        class PrintHeadStateReq implements IPrintHeadStateReq {

                            /**
                             * Constructs a new PrintHeadStateReq.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IPrintHeadStateReq);

                            /** PrintHeadStateReq state. */
                            public state: at.spg.protobuf.artemis.remote.dielectric.PrintHeadState;

                            /**
                             * Creates a new PrintHeadStateReq instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PrintHeadStateReq instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IPrintHeadStateReq): at.spg.protobuf.artemis.remote.dielectric.PrintHeadStateReq;

                            /**
                             * Encodes the specified PrintHeadStateReq message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.PrintHeadStateReq.verify|verify} messages.
                             * @param message PrintHeadStateReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IPrintHeadStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PrintHeadStateReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.PrintHeadStateReq.verify|verify} messages.
                             * @param message PrintHeadStateReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IPrintHeadStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PrintHeadStateReq message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PrintHeadStateReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.PrintHeadStateReq;

                            /**
                             * Decodes a PrintHeadStateReq message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PrintHeadStateReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.PrintHeadStateReq;

                            /**
                             * Verifies a PrintHeadStateReq message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PrintHeadStateReq message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PrintHeadStateReq
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.PrintHeadStateReq;

                            /**
                             * Creates a plain object from a PrintHeadStateReq message. Also converts values to other types if specified.
                             * @param message PrintHeadStateReq
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.PrintHeadStateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PrintHeadStateReq to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a PrintHeadStateRes. */
                        interface IPrintHeadStateRes {
                        }

                        /** Represents a PrintHeadStateRes. */
                        class PrintHeadStateRes implements IPrintHeadStateRes {

                            /**
                             * Constructs a new PrintHeadStateRes.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IPrintHeadStateRes);

                            /**
                             * Creates a new PrintHeadStateRes instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PrintHeadStateRes instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IPrintHeadStateRes): at.spg.protobuf.artemis.remote.dielectric.PrintHeadStateRes;

                            /**
                             * Encodes the specified PrintHeadStateRes message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.PrintHeadStateRes.verify|verify} messages.
                             * @param message PrintHeadStateRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IPrintHeadStateRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PrintHeadStateRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.PrintHeadStateRes.verify|verify} messages.
                             * @param message PrintHeadStateRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IPrintHeadStateRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PrintHeadStateRes message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PrintHeadStateRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.PrintHeadStateRes;

                            /**
                             * Decodes a PrintHeadStateRes message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PrintHeadStateRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.PrintHeadStateRes;

                            /**
                             * Verifies a PrintHeadStateRes message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PrintHeadStateRes message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PrintHeadStateRes
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.PrintHeadStateRes;

                            /**
                             * Creates a plain object from a PrintHeadStateRes message. Also converts values to other types if specified.
                             * @param message PrintHeadStateRes
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.PrintHeadStateRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PrintHeadStateRes to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an AbortReq. */
                        interface IAbortReq {
                        }

                        /** Represents an AbortReq. */
                        class AbortReq implements IAbortReq {

                            /**
                             * Constructs a new AbortReq.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IAbortReq);

                            /**
                             * Creates a new AbortReq instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AbortReq instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IAbortReq): at.spg.protobuf.artemis.remote.dielectric.AbortReq;

                            /**
                             * Encodes the specified AbortReq message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.AbortReq.verify|verify} messages.
                             * @param message AbortReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IAbortReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AbortReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.AbortReq.verify|verify} messages.
                             * @param message AbortReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IAbortReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AbortReq message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AbortReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.AbortReq;

                            /**
                             * Decodes an AbortReq message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AbortReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.AbortReq;

                            /**
                             * Verifies an AbortReq message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AbortReq message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AbortReq
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.AbortReq;

                            /**
                             * Creates a plain object from an AbortReq message. Also converts values to other types if specified.
                             * @param message AbortReq
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.AbortReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AbortReq to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an AbortRes. */
                        interface IAbortRes {
                        }

                        /** Represents an AbortRes. */
                        class AbortRes implements IAbortRes {

                            /**
                             * Constructs a new AbortRes.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IAbortRes);

                            /**
                             * Creates a new AbortRes instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AbortRes instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IAbortRes): at.spg.protobuf.artemis.remote.dielectric.AbortRes;

                            /**
                             * Encodes the specified AbortRes message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.AbortRes.verify|verify} messages.
                             * @param message AbortRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IAbortRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AbortRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.AbortRes.verify|verify} messages.
                             * @param message AbortRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IAbortRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AbortRes message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AbortRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.AbortRes;

                            /**
                             * Decodes an AbortRes message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AbortRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.AbortRes;

                            /**
                             * Verifies an AbortRes message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AbortRes message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AbortRes
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.AbortRes;

                            /**
                             * Creates a plain object from an AbortRes message. Also converts values to other types if specified.
                             * @param message AbortRes
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.AbortRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AbortRes to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a PreHeatReq. */
                        interface IPreHeatReq {

                            /** PreHeatReq inletTemp */
                            inletTemp?: (number|null);

                            /** PreHeatReq mountTemp */
                            mountTemp?: (number|null);

                            /** PreHeatReq headTemp */
                            headTemp?: (number|null);
                        }

                        /** Represents a PreHeatReq. */
                        class PreHeatReq implements IPreHeatReq {

                            /**
                             * Constructs a new PreHeatReq.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IPreHeatReq);

                            /** PreHeatReq inletTemp. */
                            public inletTemp: number;

                            /** PreHeatReq mountTemp. */
                            public mountTemp: number;

                            /** PreHeatReq headTemp. */
                            public headTemp: number;

                            /**
                             * Creates a new PreHeatReq instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PreHeatReq instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IPreHeatReq): at.spg.protobuf.artemis.remote.dielectric.PreHeatReq;

                            /**
                             * Encodes the specified PreHeatReq message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.PreHeatReq.verify|verify} messages.
                             * @param message PreHeatReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IPreHeatReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PreHeatReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.PreHeatReq.verify|verify} messages.
                             * @param message PreHeatReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IPreHeatReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PreHeatReq message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PreHeatReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.PreHeatReq;

                            /**
                             * Decodes a PreHeatReq message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PreHeatReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.PreHeatReq;

                            /**
                             * Verifies a PreHeatReq message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PreHeatReq message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PreHeatReq
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.PreHeatReq;

                            /**
                             * Creates a plain object from a PreHeatReq message. Also converts values to other types if specified.
                             * @param message PreHeatReq
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.PreHeatReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PreHeatReq to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a PreHeatRes. */
                        interface IPreHeatRes {
                        }

                        /** Represents a PreHeatRes. */
                        class PreHeatRes implements IPreHeatRes {

                            /**
                             * Constructs a new PreHeatRes.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IPreHeatRes);

                            /**
                             * Creates a new PreHeatRes instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PreHeatRes instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IPreHeatRes): at.spg.protobuf.artemis.remote.dielectric.PreHeatRes;

                            /**
                             * Encodes the specified PreHeatRes message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.PreHeatRes.verify|verify} messages.
                             * @param message PreHeatRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IPreHeatRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PreHeatRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.PreHeatRes.verify|verify} messages.
                             * @param message PreHeatRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IPreHeatRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PreHeatRes message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PreHeatRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.PreHeatRes;

                            /**
                             * Decodes a PreHeatRes message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PreHeatRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.PreHeatRes;

                            /**
                             * Verifies a PreHeatRes message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PreHeatRes message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PreHeatRes
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.PreHeatRes;

                            /**
                             * Creates a plain object from a PreHeatRes message. Also converts values to other types if specified.
                             * @param message PreHeatRes
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.PreHeatRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PreHeatRes to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ToggleCameraLightReq. */
                        interface IToggleCameraLightReq {
                        }

                        /** Represents a ToggleCameraLightReq. */
                        class ToggleCameraLightReq implements IToggleCameraLightReq {

                            /**
                             * Constructs a new ToggleCameraLightReq.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IToggleCameraLightReq);

                            /**
                             * Creates a new ToggleCameraLightReq instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ToggleCameraLightReq instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IToggleCameraLightReq): at.spg.protobuf.artemis.remote.dielectric.ToggleCameraLightReq;

                            /**
                             * Encodes the specified ToggleCameraLightReq message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ToggleCameraLightReq.verify|verify} messages.
                             * @param message ToggleCameraLightReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IToggleCameraLightReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ToggleCameraLightReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ToggleCameraLightReq.verify|verify} messages.
                             * @param message ToggleCameraLightReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IToggleCameraLightReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ToggleCameraLightReq message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ToggleCameraLightReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.ToggleCameraLightReq;

                            /**
                             * Decodes a ToggleCameraLightReq message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ToggleCameraLightReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.ToggleCameraLightReq;

                            /**
                             * Verifies a ToggleCameraLightReq message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ToggleCameraLightReq message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ToggleCameraLightReq
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.ToggleCameraLightReq;

                            /**
                             * Creates a plain object from a ToggleCameraLightReq message. Also converts values to other types if specified.
                             * @param message ToggleCameraLightReq
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.ToggleCameraLightReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ToggleCameraLightReq to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ToggleCameraLightRes. */
                        interface IToggleCameraLightRes {
                        }

                        /** Represents a ToggleCameraLightRes. */
                        class ToggleCameraLightRes implements IToggleCameraLightRes {

                            /**
                             * Constructs a new ToggleCameraLightRes.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IToggleCameraLightRes);

                            /**
                             * Creates a new ToggleCameraLightRes instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ToggleCameraLightRes instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IToggleCameraLightRes): at.spg.protobuf.artemis.remote.dielectric.ToggleCameraLightRes;

                            /**
                             * Encodes the specified ToggleCameraLightRes message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ToggleCameraLightRes.verify|verify} messages.
                             * @param message ToggleCameraLightRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IToggleCameraLightRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ToggleCameraLightRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ToggleCameraLightRes.verify|verify} messages.
                             * @param message ToggleCameraLightRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IToggleCameraLightRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ToggleCameraLightRes message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ToggleCameraLightRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.ToggleCameraLightRes;

                            /**
                             * Decodes a ToggleCameraLightRes message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ToggleCameraLightRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.ToggleCameraLightRes;

                            /**
                             * Verifies a ToggleCameraLightRes message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ToggleCameraLightRes message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ToggleCameraLightRes
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.ToggleCameraLightRes;

                            /**
                             * Creates a plain object from a ToggleCameraLightRes message. Also converts values to other types if specified.
                             * @param message ToggleCameraLightRes
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.ToggleCameraLightRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ToggleCameraLightRes to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a SpitReq. */
                        interface ISpitReq {

                            /** SpitReq voltage */
                            voltage?: (number|null);

                            /** SpitReq timeSeconds */
                            timeSeconds?: (number|null);

                            /** SpitReq frequencyHz */
                            frequencyHz?: (number|null);

                            /** SpitReq pulseHigh */
                            pulseHigh?: (number|null);

                            /** SpitReq pulseLow */
                            pulseLow?: (number|null);

                            /** SpitReq pulseZero */
                            pulseZero?: (number|null);
                        }

                        /** Represents a SpitReq. */
                        class SpitReq implements ISpitReq {

                            /**
                             * Constructs a new SpitReq.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.ISpitReq);

                            /** SpitReq voltage. */
                            public voltage: number;

                            /** SpitReq timeSeconds. */
                            public timeSeconds: number;

                            /** SpitReq frequencyHz. */
                            public frequencyHz: number;

                            /** SpitReq pulseHigh. */
                            public pulseHigh: number;

                            /** SpitReq pulseLow. */
                            public pulseLow: number;

                            /** SpitReq pulseZero. */
                            public pulseZero: number;

                            /**
                             * Creates a new SpitReq instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SpitReq instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.ISpitReq): at.spg.protobuf.artemis.remote.dielectric.SpitReq;

                            /**
                             * Encodes the specified SpitReq message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.SpitReq.verify|verify} messages.
                             * @param message SpitReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.ISpitReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SpitReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.SpitReq.verify|verify} messages.
                             * @param message SpitReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.ISpitReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SpitReq message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SpitReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.SpitReq;

                            /**
                             * Decodes a SpitReq message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SpitReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.SpitReq;

                            /**
                             * Verifies a SpitReq message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SpitReq message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SpitReq
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.SpitReq;

                            /**
                             * Creates a plain object from a SpitReq message. Also converts values to other types if specified.
                             * @param message SpitReq
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.SpitReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SpitReq to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a SpitRes. */
                        interface ISpitRes {
                        }

                        /** Represents a SpitRes. */
                        class SpitRes implements ISpitRes {

                            /**
                             * Constructs a new SpitRes.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.ISpitRes);

                            /**
                             * Creates a new SpitRes instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SpitRes instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.ISpitRes): at.spg.protobuf.artemis.remote.dielectric.SpitRes;

                            /**
                             * Encodes the specified SpitRes message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.SpitRes.verify|verify} messages.
                             * @param message SpitRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.ISpitRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SpitRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.SpitRes.verify|verify} messages.
                             * @param message SpitRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.ISpitRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SpitRes message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SpitRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.SpitRes;

                            /**
                             * Decodes a SpitRes message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SpitRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.SpitRes;

                            /**
                             * Verifies a SpitRes message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SpitRes message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SpitRes
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.SpitRes;

                            /**
                             * Creates a plain object from a SpitRes message. Also converts values to other types if specified.
                             * @param message SpitRes
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.SpitRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SpitRes to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ModifyCalibrationReq. */
                        interface IModifyCalibrationReq {

                            /** ModifyCalibrationReq absoluteX */
                            absoluteX?: (number|null);

                            /** ModifyCalibrationReq absoluteY */
                            absoluteY?: (number|null);

                            /** ModifyCalibrationReq relativeByX */
                            relativeByX?: (number|null);

                            /** ModifyCalibrationReq relativeByY */
                            relativeByY?: (number|null);
                        }

                        /** Represents a ModifyCalibrationReq. */
                        class ModifyCalibrationReq implements IModifyCalibrationReq {

                            /**
                             * Constructs a new ModifyCalibrationReq.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IModifyCalibrationReq);

                            /** ModifyCalibrationReq absoluteX. */
                            public absoluteX?: (number|null);

                            /** ModifyCalibrationReq absoluteY. */
                            public absoluteY?: (number|null);

                            /** ModifyCalibrationReq relativeByX. */
                            public relativeByX?: (number|null);

                            /** ModifyCalibrationReq relativeByY. */
                            public relativeByY?: (number|null);

                            /** ModifyCalibrationReq _absoluteX. */
                            public _absoluteX?: "absoluteX";

                            /** ModifyCalibrationReq _absoluteY. */
                            public _absoluteY?: "absoluteY";

                            /** ModifyCalibrationReq _relativeByX. */
                            public _relativeByX?: "relativeByX";

                            /** ModifyCalibrationReq _relativeByY. */
                            public _relativeByY?: "relativeByY";

                            /**
                             * Creates a new ModifyCalibrationReq instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ModifyCalibrationReq instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IModifyCalibrationReq): at.spg.protobuf.artemis.remote.dielectric.ModifyCalibrationReq;

                            /**
                             * Encodes the specified ModifyCalibrationReq message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ModifyCalibrationReq.verify|verify} messages.
                             * @param message ModifyCalibrationReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IModifyCalibrationReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ModifyCalibrationReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ModifyCalibrationReq.verify|verify} messages.
                             * @param message ModifyCalibrationReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IModifyCalibrationReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ModifyCalibrationReq message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ModifyCalibrationReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.ModifyCalibrationReq;

                            /**
                             * Decodes a ModifyCalibrationReq message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ModifyCalibrationReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.ModifyCalibrationReq;

                            /**
                             * Verifies a ModifyCalibrationReq message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ModifyCalibrationReq message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ModifyCalibrationReq
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.ModifyCalibrationReq;

                            /**
                             * Creates a plain object from a ModifyCalibrationReq message. Also converts values to other types if specified.
                             * @param message ModifyCalibrationReq
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.ModifyCalibrationReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ModifyCalibrationReq to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ModifyCalibrationRes. */
                        interface IModifyCalibrationRes {
                        }

                        /** Represents a ModifyCalibrationRes. */
                        class ModifyCalibrationRes implements IModifyCalibrationRes {

                            /**
                             * Constructs a new ModifyCalibrationRes.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IModifyCalibrationRes);

                            /**
                             * Creates a new ModifyCalibrationRes instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ModifyCalibrationRes instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IModifyCalibrationRes): at.spg.protobuf.artemis.remote.dielectric.ModifyCalibrationRes;

                            /**
                             * Encodes the specified ModifyCalibrationRes message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ModifyCalibrationRes.verify|verify} messages.
                             * @param message ModifyCalibrationRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IModifyCalibrationRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ModifyCalibrationRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ModifyCalibrationRes.verify|verify} messages.
                             * @param message ModifyCalibrationRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IModifyCalibrationRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ModifyCalibrationRes message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ModifyCalibrationRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.ModifyCalibrationRes;

                            /**
                             * Decodes a ModifyCalibrationRes message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ModifyCalibrationRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.ModifyCalibrationRes;

                            /**
                             * Verifies a ModifyCalibrationRes message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ModifyCalibrationRes message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ModifyCalibrationRes
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.ModifyCalibrationRes;

                            /**
                             * Creates a plain object from a ModifyCalibrationRes message. Also converts values to other types if specified.
                             * @param message ModifyCalibrationRes
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.ModifyCalibrationRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ModifyCalibrationRes to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ModifyMeniscusPressureReq. */
                        interface IModifyMeniscusPressureReq {

                            /** ModifyMeniscusPressureReq inkDensity */
                            inkDensity?: (number|null);

                            /** ModifyMeniscusPressureReq pressureOffset */
                            pressureOffset?: (number|null);
                        }

                        /** Represents a ModifyMeniscusPressureReq. */
                        class ModifyMeniscusPressureReq implements IModifyMeniscusPressureReq {

                            /**
                             * Constructs a new ModifyMeniscusPressureReq.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IModifyMeniscusPressureReq);

                            /** ModifyMeniscusPressureReq inkDensity. */
                            public inkDensity?: (number|null);

                            /** ModifyMeniscusPressureReq pressureOffset. */
                            public pressureOffset?: (number|null);

                            /** ModifyMeniscusPressureReq _inkDensity. */
                            public _inkDensity?: "inkDensity";

                            /** ModifyMeniscusPressureReq _pressureOffset. */
                            public _pressureOffset?: "pressureOffset";

                            /**
                             * Creates a new ModifyMeniscusPressureReq instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ModifyMeniscusPressureReq instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IModifyMeniscusPressureReq): at.spg.protobuf.artemis.remote.dielectric.ModifyMeniscusPressureReq;

                            /**
                             * Encodes the specified ModifyMeniscusPressureReq message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ModifyMeniscusPressureReq.verify|verify} messages.
                             * @param message ModifyMeniscusPressureReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IModifyMeniscusPressureReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ModifyMeniscusPressureReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ModifyMeniscusPressureReq.verify|verify} messages.
                             * @param message ModifyMeniscusPressureReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IModifyMeniscusPressureReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ModifyMeniscusPressureReq message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ModifyMeniscusPressureReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.ModifyMeniscusPressureReq;

                            /**
                             * Decodes a ModifyMeniscusPressureReq message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ModifyMeniscusPressureReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.ModifyMeniscusPressureReq;

                            /**
                             * Verifies a ModifyMeniscusPressureReq message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ModifyMeniscusPressureReq message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ModifyMeniscusPressureReq
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.ModifyMeniscusPressureReq;

                            /**
                             * Creates a plain object from a ModifyMeniscusPressureReq message. Also converts values to other types if specified.
                             * @param message ModifyMeniscusPressureReq
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.ModifyMeniscusPressureReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ModifyMeniscusPressureReq to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ModifyMeniscusPressureRes. */
                        interface IModifyMeniscusPressureRes {
                        }

                        /** Represents a ModifyMeniscusPressureRes. */
                        class ModifyMeniscusPressureRes implements IModifyMeniscusPressureRes {

                            /**
                             * Constructs a new ModifyMeniscusPressureRes.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IModifyMeniscusPressureRes);

                            /**
                             * Creates a new ModifyMeniscusPressureRes instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ModifyMeniscusPressureRes instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IModifyMeniscusPressureRes): at.spg.protobuf.artemis.remote.dielectric.ModifyMeniscusPressureRes;

                            /**
                             * Encodes the specified ModifyMeniscusPressureRes message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ModifyMeniscusPressureRes.verify|verify} messages.
                             * @param message ModifyMeniscusPressureRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IModifyMeniscusPressureRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ModifyMeniscusPressureRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ModifyMeniscusPressureRes.verify|verify} messages.
                             * @param message ModifyMeniscusPressureRes message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IModifyMeniscusPressureRes, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ModifyMeniscusPressureRes message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ModifyMeniscusPressureRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.ModifyMeniscusPressureRes;

                            /**
                             * Decodes a ModifyMeniscusPressureRes message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ModifyMeniscusPressureRes
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.ModifyMeniscusPressureRes;

                            /**
                             * Verifies a ModifyMeniscusPressureRes message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ModifyMeniscusPressureRes message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ModifyMeniscusPressureRes
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.ModifyMeniscusPressureRes;

                            /**
                             * Creates a plain object from a ModifyMeniscusPressureRes message. Also converts values to other types if specified.
                             * @param message ModifyMeniscusPressureRes
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.ModifyMeniscusPressureRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ModifyMeniscusPressureRes to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a TakeSnapshotReq. */
                        interface ITakeSnapshotReq {
                        }

                        /** Represents a TakeSnapshotReq. */
                        class TakeSnapshotReq implements ITakeSnapshotReq {

                            /**
                             * Constructs a new TakeSnapshotReq.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.ITakeSnapshotReq);

                            /**
                             * Creates a new TakeSnapshotReq instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TakeSnapshotReq instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.ITakeSnapshotReq): at.spg.protobuf.artemis.remote.dielectric.TakeSnapshotReq;

                            /**
                             * Encodes the specified TakeSnapshotReq message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.TakeSnapshotReq.verify|verify} messages.
                             * @param message TakeSnapshotReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.ITakeSnapshotReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TakeSnapshotReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.TakeSnapshotReq.verify|verify} messages.
                             * @param message TakeSnapshotReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.ITakeSnapshotReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TakeSnapshotReq message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TakeSnapshotReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.TakeSnapshotReq;

                            /**
                             * Decodes a TakeSnapshotReq message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TakeSnapshotReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.TakeSnapshotReq;

                            /**
                             * Verifies a TakeSnapshotReq message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TakeSnapshotReq message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TakeSnapshotReq
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.TakeSnapshotReq;

                            /**
                             * Creates a plain object from a TakeSnapshotReq message. Also converts values to other types if specified.
                             * @param message TakeSnapshotReq
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.TakeSnapshotReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TakeSnapshotReq to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a TakeSnapshotPayload. */
                        interface ITakeSnapshotPayload {

                            /** TakeSnapshotPayload following */
                            following?: (boolean|null);

                            /** TakeSnapshotPayload data */
                            data?: (Uint8Array|null);
                        }

                        /** Represents a TakeSnapshotPayload. */
                        class TakeSnapshotPayload implements ITakeSnapshotPayload {

                            /**
                             * Constructs a new TakeSnapshotPayload.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.ITakeSnapshotPayload);

                            /** TakeSnapshotPayload following. */
                            public following: boolean;

                            /** TakeSnapshotPayload data. */
                            public data: Uint8Array;

                            /**
                             * Creates a new TakeSnapshotPayload instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TakeSnapshotPayload instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.ITakeSnapshotPayload): at.spg.protobuf.artemis.remote.dielectric.TakeSnapshotPayload;

                            /**
                             * Encodes the specified TakeSnapshotPayload message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.TakeSnapshotPayload.verify|verify} messages.
                             * @param message TakeSnapshotPayload message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.ITakeSnapshotPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TakeSnapshotPayload message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.TakeSnapshotPayload.verify|verify} messages.
                             * @param message TakeSnapshotPayload message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.ITakeSnapshotPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TakeSnapshotPayload message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TakeSnapshotPayload
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.TakeSnapshotPayload;

                            /**
                             * Decodes a TakeSnapshotPayload message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TakeSnapshotPayload
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.TakeSnapshotPayload;

                            /**
                             * Verifies a TakeSnapshotPayload message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TakeSnapshotPayload message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TakeSnapshotPayload
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.TakeSnapshotPayload;

                            /**
                             * Creates a plain object from a TakeSnapshotPayload message. Also converts values to other types if specified.
                             * @param message TakeSnapshotPayload
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.TakeSnapshotPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TakeSnapshotPayload to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ConfigureFiducialDetectionReq. */
                        interface IConfigureFiducialDetectionReq {

                            /** ConfigureFiducialDetectionReq fiducialType */
                            fiducialType?: (at.spg.protobuf.artemis.remote.dielectric.FiducialType|null);

                            /** ConfigureFiducialDetectionReq templateBackgroundColor */
                            templateBackgroundColor?: (number|null);

                            /** ConfigureFiducialDetectionReq templateForegroundColor */
                            templateForegroundColor?: (number|null);

                            /** ConfigureFiducialDetectionReq confidenceCutoff */
                            confidenceCutoff?: (number|null);

                            /** ConfigureFiducialDetectionReq cameraExposureTime */
                            cameraExposureTime?: (number|null);

                            /** ConfigureFiducialDetectionReq cameraGain */
                            cameraGain?: (number|null);

                            /** ConfigureFiducialDetectionReq saveConfiguration */
                            saveConfiguration?: (boolean|null);
                        }

                        /** Represents a ConfigureFiducialDetectionReq. */
                        class ConfigureFiducialDetectionReq implements IConfigureFiducialDetectionReq {

                            /**
                             * Constructs a new ConfigureFiducialDetectionReq.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IConfigureFiducialDetectionReq);

                            /** ConfigureFiducialDetectionReq fiducialType. */
                            public fiducialType: at.spg.protobuf.artemis.remote.dielectric.FiducialType;

                            /** ConfigureFiducialDetectionReq templateBackgroundColor. */
                            public templateBackgroundColor: number;

                            /** ConfigureFiducialDetectionReq templateForegroundColor. */
                            public templateForegroundColor: number;

                            /** ConfigureFiducialDetectionReq confidenceCutoff. */
                            public confidenceCutoff: number;

                            /** ConfigureFiducialDetectionReq cameraExposureTime. */
                            public cameraExposureTime: number;

                            /** ConfigureFiducialDetectionReq cameraGain. */
                            public cameraGain: number;

                            /** ConfigureFiducialDetectionReq saveConfiguration. */
                            public saveConfiguration: boolean;

                            /**
                             * Creates a new ConfigureFiducialDetectionReq instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ConfigureFiducialDetectionReq instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IConfigureFiducialDetectionReq): at.spg.protobuf.artemis.remote.dielectric.ConfigureFiducialDetectionReq;

                            /**
                             * Encodes the specified ConfigureFiducialDetectionReq message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ConfigureFiducialDetectionReq.verify|verify} messages.
                             * @param message ConfigureFiducialDetectionReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IConfigureFiducialDetectionReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ConfigureFiducialDetectionReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ConfigureFiducialDetectionReq.verify|verify} messages.
                             * @param message ConfigureFiducialDetectionReq message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IConfigureFiducialDetectionReq, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ConfigureFiducialDetectionReq message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ConfigureFiducialDetectionReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.ConfigureFiducialDetectionReq;

                            /**
                             * Decodes a ConfigureFiducialDetectionReq message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ConfigureFiducialDetectionReq
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.ConfigureFiducialDetectionReq;

                            /**
                             * Verifies a ConfigureFiducialDetectionReq message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ConfigureFiducialDetectionReq message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ConfigureFiducialDetectionReq
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.ConfigureFiducialDetectionReq;

                            /**
                             * Creates a plain object from a ConfigureFiducialDetectionReq message. Also converts values to other types if specified.
                             * @param message ConfigureFiducialDetectionReq
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.ConfigureFiducialDetectionReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ConfigureFiducialDetectionReq to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a DetectedFiducial. */
                        interface IDetectedFiducial {

                            /** DetectedFiducial x */
                            x?: (number|null);

                            /** DetectedFiducial y */
                            y?: (number|null);

                            /** DetectedFiducial confidence */
                            confidence?: (number|null);
                        }

                        /** Represents a DetectedFiducial. */
                        class DetectedFiducial implements IDetectedFiducial {

                            /**
                             * Constructs a new DetectedFiducial.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IDetectedFiducial);

                            /** DetectedFiducial x. */
                            public x: number;

                            /** DetectedFiducial y. */
                            public y: number;

                            /** DetectedFiducial confidence. */
                            public confidence: number;

                            /**
                             * Creates a new DetectedFiducial instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns DetectedFiducial instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IDetectedFiducial): at.spg.protobuf.artemis.remote.dielectric.DetectedFiducial;

                            /**
                             * Encodes the specified DetectedFiducial message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.DetectedFiducial.verify|verify} messages.
                             * @param message DetectedFiducial message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IDetectedFiducial, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified DetectedFiducial message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.DetectedFiducial.verify|verify} messages.
                             * @param message DetectedFiducial message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IDetectedFiducial, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a DetectedFiducial message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns DetectedFiducial
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.DetectedFiducial;

                            /**
                             * Decodes a DetectedFiducial message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns DetectedFiducial
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.DetectedFiducial;

                            /**
                             * Verifies a DetectedFiducial message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a DetectedFiducial message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns DetectedFiducial
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.DetectedFiducial;

                            /**
                             * Creates a plain object from a DetectedFiducial message. Also converts values to other types if specified.
                             * @param message DetectedFiducial
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.DetectedFiducial, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this DetectedFiducial to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ConfigureFiducialDetectionPayload. */
                        interface IConfigureFiducialDetectionPayload {

                            /** ConfigureFiducialDetectionPayload detected */
                            detected?: (at.spg.protobuf.artemis.remote.dielectric.IDetectedFiducial[]|null);
                        }

                        /** Represents a ConfigureFiducialDetectionPayload. */
                        class ConfigureFiducialDetectionPayload implements IConfigureFiducialDetectionPayload {

                            /**
                             * Constructs a new ConfigureFiducialDetectionPayload.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.remote.dielectric.IConfigureFiducialDetectionPayload);

                            /** ConfigureFiducialDetectionPayload detected. */
                            public detected: at.spg.protobuf.artemis.remote.dielectric.IDetectedFiducial[];

                            /**
                             * Creates a new ConfigureFiducialDetectionPayload instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ConfigureFiducialDetectionPayload instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.remote.dielectric.IConfigureFiducialDetectionPayload): at.spg.protobuf.artemis.remote.dielectric.ConfigureFiducialDetectionPayload;

                            /**
                             * Encodes the specified ConfigureFiducialDetectionPayload message. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ConfigureFiducialDetectionPayload.verify|verify} messages.
                             * @param message ConfigureFiducialDetectionPayload message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.remote.dielectric.IConfigureFiducialDetectionPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ConfigureFiducialDetectionPayload message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.remote.dielectric.ConfigureFiducialDetectionPayload.verify|verify} messages.
                             * @param message ConfigureFiducialDetectionPayload message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.remote.dielectric.IConfigureFiducialDetectionPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ConfigureFiducialDetectionPayload message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ConfigureFiducialDetectionPayload
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.remote.dielectric.ConfigureFiducialDetectionPayload;

                            /**
                             * Decodes a ConfigureFiducialDetectionPayload message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ConfigureFiducialDetectionPayload
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.remote.dielectric.ConfigureFiducialDetectionPayload;

                            /**
                             * Verifies a ConfigureFiducialDetectionPayload message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ConfigureFiducialDetectionPayload message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ConfigureFiducialDetectionPayload
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.remote.dielectric.ConfigureFiducialDetectionPayload;

                            /**
                             * Creates a plain object from a ConfigureFiducialDetectionPayload message. Also converts values to other types if specified.
                             * @param message ConfigureFiducialDetectionPayload
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.remote.dielectric.ConfigureFiducialDetectionPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ConfigureFiducialDetectionPayload to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }

                /** Namespace process. */
                namespace process {

                    /** Properties of a VertexMsg. */
                    interface IVertexMsg {

                        /** VertexMsg x */
                        x?: (number|null);

                        /** VertexMsg y */
                        y?: (number|null);
                    }

                    /** Represents a VertexMsg. */
                    class VertexMsg implements IVertexMsg {

                        /**
                         * Constructs a new VertexMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.process.IVertexMsg);

                        /** VertexMsg x. */
                        public x: number;

                        /** VertexMsg y. */
                        public y: number;

                        /**
                         * Creates a new VertexMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VertexMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.process.IVertexMsg): at.spg.protobuf.artemis.process.VertexMsg;

                        /**
                         * Encodes the specified VertexMsg message. Does not implicitly {@link at.spg.protobuf.artemis.process.VertexMsg.verify|verify} messages.
                         * @param message VertexMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.process.IVertexMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VertexMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.process.VertexMsg.verify|verify} messages.
                         * @param message VertexMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.process.IVertexMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VertexMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VertexMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.process.VertexMsg;

                        /**
                         * Decodes a VertexMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VertexMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.process.VertexMsg;

                        /**
                         * Verifies a VertexMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VertexMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VertexMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.process.VertexMsg;

                        /**
                         * Creates a plain object from a VertexMsg message. Also converts values to other types if specified.
                         * @param message VertexMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.process.VertexMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VertexMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** ProcessObjectTypeE enum. */
                    enum ProcessObjectTypeE {
                        UndefinedProcessObject = 0,
                        DielectricInk = 1,
                        SilverInk = 2,
                        Laser = 3,
                        ModuleDefinition = 4
                    }

                    /** Properties of a SilverInkSettingsMsg. */
                    interface ISilverInkSettingsMsg {
                    }

                    /** Represents a SilverInkSettingsMsg. */
                    class SilverInkSettingsMsg implements ISilverInkSettingsMsg {

                        /**
                         * Constructs a new SilverInkSettingsMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.process.ISilverInkSettingsMsg);

                        /**
                         * Creates a new SilverInkSettingsMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SilverInkSettingsMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.process.ISilverInkSettingsMsg): at.spg.protobuf.artemis.process.SilverInkSettingsMsg;

                        /**
                         * Encodes the specified SilverInkSettingsMsg message. Does not implicitly {@link at.spg.protobuf.artemis.process.SilverInkSettingsMsg.verify|verify} messages.
                         * @param message SilverInkSettingsMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.process.ISilverInkSettingsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SilverInkSettingsMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.process.SilverInkSettingsMsg.verify|verify} messages.
                         * @param message SilverInkSettingsMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.process.ISilverInkSettingsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SilverInkSettingsMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SilverInkSettingsMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.process.SilverInkSettingsMsg;

                        /**
                         * Decodes a SilverInkSettingsMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SilverInkSettingsMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.process.SilverInkSettingsMsg;

                        /**
                         * Verifies a SilverInkSettingsMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SilverInkSettingsMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SilverInkSettingsMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.process.SilverInkSettingsMsg;

                        /**
                         * Creates a plain object from a SilverInkSettingsMsg message. Also converts values to other types if specified.
                         * @param message SilverInkSettingsMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.process.SilverInkSettingsMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SilverInkSettingsMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DielectricInkSettingsMsg. */
                    interface IDielectricInkSettingsMsg {
                    }

                    /** Represents a DielectricInkSettingsMsg. */
                    class DielectricInkSettingsMsg implements IDielectricInkSettingsMsg {

                        /**
                         * Constructs a new DielectricInkSettingsMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.process.IDielectricInkSettingsMsg);

                        /**
                         * Creates a new DielectricInkSettingsMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DielectricInkSettingsMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.process.IDielectricInkSettingsMsg): at.spg.protobuf.artemis.process.DielectricInkSettingsMsg;

                        /**
                         * Encodes the specified DielectricInkSettingsMsg message. Does not implicitly {@link at.spg.protobuf.artemis.process.DielectricInkSettingsMsg.verify|verify} messages.
                         * @param message DielectricInkSettingsMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.process.IDielectricInkSettingsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DielectricInkSettingsMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.process.DielectricInkSettingsMsg.verify|verify} messages.
                         * @param message DielectricInkSettingsMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.process.IDielectricInkSettingsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DielectricInkSettingsMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DielectricInkSettingsMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.process.DielectricInkSettingsMsg;

                        /**
                         * Decodes a DielectricInkSettingsMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DielectricInkSettingsMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.process.DielectricInkSettingsMsg;

                        /**
                         * Verifies a DielectricInkSettingsMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DielectricInkSettingsMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DielectricInkSettingsMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.process.DielectricInkSettingsMsg;

                        /**
                         * Creates a plain object from a DielectricInkSettingsMsg message. Also converts values to other types if specified.
                         * @param message DielectricInkSettingsMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.process.DielectricInkSettingsMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DielectricInkSettingsMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a LaserSettingsMsg. */
                    interface ILaserSettingsMsg {

                        /** LaserSettingsMsg type */
                        type?: (number|null);

                        /** LaserSettingsMsg timeSeconds */
                        timeSeconds?: (number|null);
                    }

                    /** Represents a LaserSettingsMsg. */
                    class LaserSettingsMsg implements ILaserSettingsMsg {

                        /**
                         * Constructs a new LaserSettingsMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.process.ILaserSettingsMsg);

                        /** LaserSettingsMsg type. */
                        public type: number;

                        /** LaserSettingsMsg timeSeconds. */
                        public timeSeconds: number;

                        /**
                         * Creates a new LaserSettingsMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LaserSettingsMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.process.ILaserSettingsMsg): at.spg.protobuf.artemis.process.LaserSettingsMsg;

                        /**
                         * Encodes the specified LaserSettingsMsg message. Does not implicitly {@link at.spg.protobuf.artemis.process.LaserSettingsMsg.verify|verify} messages.
                         * @param message LaserSettingsMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.process.ILaserSettingsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LaserSettingsMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.process.LaserSettingsMsg.verify|verify} messages.
                         * @param message LaserSettingsMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.process.ILaserSettingsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LaserSettingsMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LaserSettingsMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.process.LaserSettingsMsg;

                        /**
                         * Decodes a LaserSettingsMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LaserSettingsMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.process.LaserSettingsMsg;

                        /**
                         * Verifies a LaserSettingsMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LaserSettingsMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LaserSettingsMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.process.LaserSettingsMsg;

                        /**
                         * Creates a plain object from a LaserSettingsMsg message. Also converts values to other types if specified.
                         * @param message LaserSettingsMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.process.LaserSettingsMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LaserSettingsMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ProcessObjectMsg. */
                    interface IProcessObjectMsg {

                        /** ProcessObjectMsg vertices */
                        vertices?: (at.spg.protobuf.artemis.process.IVertexMsg[]|null);

                        /** ProcessObjectMsg silver */
                        silver?: (at.spg.protobuf.artemis.process.ISilverInkSettingsMsg|null);

                        /** ProcessObjectMsg dielectric */
                        dielectric?: (at.spg.protobuf.artemis.process.IDielectricInkSettingsMsg|null);

                        /** ProcessObjectMsg laserSettings */
                        laserSettings?: (at.spg.protobuf.artemis.process.ILaserSettingsMsg|null);

                        /** ProcessObjectMsg type */
                        type?: (at.spg.protobuf.artemis.process.ProcessObjectTypeE|null);

                        /** ProcessObjectMsg batchId */
                        batchId?: (number|null);

                        /** ProcessObjectMsg label */
                        label?: (string|null);
                    }

                    /** Represents a ProcessObjectMsg. */
                    class ProcessObjectMsg implements IProcessObjectMsg {

                        /**
                         * Constructs a new ProcessObjectMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.process.IProcessObjectMsg);

                        /** ProcessObjectMsg vertices. */
                        public vertices: at.spg.protobuf.artemis.process.IVertexMsg[];

                        /** ProcessObjectMsg silver. */
                        public silver?: (at.spg.protobuf.artemis.process.ISilverInkSettingsMsg|null);

                        /** ProcessObjectMsg dielectric. */
                        public dielectric?: (at.spg.protobuf.artemis.process.IDielectricInkSettingsMsg|null);

                        /** ProcessObjectMsg laserSettings. */
                        public laserSettings?: (at.spg.protobuf.artemis.process.ILaserSettingsMsg|null);

                        /** ProcessObjectMsg type. */
                        public type: at.spg.protobuf.artemis.process.ProcessObjectTypeE;

                        /** ProcessObjectMsg batchId. */
                        public batchId: number;

                        /** ProcessObjectMsg label. */
                        public label: string;

                        /** ProcessObjectMsg settings. */
                        public settings?: ("silver"|"dielectric"|"laserSettings");

                        /**
                         * Creates a new ProcessObjectMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProcessObjectMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.process.IProcessObjectMsg): at.spg.protobuf.artemis.process.ProcessObjectMsg;

                        /**
                         * Encodes the specified ProcessObjectMsg message. Does not implicitly {@link at.spg.protobuf.artemis.process.ProcessObjectMsg.verify|verify} messages.
                         * @param message ProcessObjectMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.process.IProcessObjectMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProcessObjectMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.process.ProcessObjectMsg.verify|verify} messages.
                         * @param message ProcessObjectMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.process.IProcessObjectMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProcessObjectMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProcessObjectMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.process.ProcessObjectMsg;

                        /**
                         * Decodes a ProcessObjectMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProcessObjectMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.process.ProcessObjectMsg;

                        /**
                         * Verifies a ProcessObjectMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProcessObjectMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProcessObjectMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.process.ProcessObjectMsg;

                        /**
                         * Creates a plain object from a ProcessObjectMsg message. Also converts values to other types if specified.
                         * @param message ProcessObjectMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.process.ProcessObjectMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProcessObjectMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** FiducialTypeE enum. */
                    enum FiducialTypeE {
                        UndefinedFiducial = 0,
                        HashFiducial = 1
                    }

                    /** Properties of a FiducialMsg. */
                    interface IFiducialMsg {

                        /** FiducialMsg type */
                        type?: (at.spg.protobuf.artemis.process.FiducialTypeE|null);

                        /** FiducialMsg position */
                        position?: (at.spg.protobuf.artemis.process.IVertexMsg|null);

                        /** FiducialMsg batchId */
                        batchId?: (number|null);
                    }

                    /** Represents a FiducialMsg. */
                    class FiducialMsg implements IFiducialMsg {

                        /**
                         * Constructs a new FiducialMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.process.IFiducialMsg);

                        /** FiducialMsg type. */
                        public type: at.spg.protobuf.artemis.process.FiducialTypeE;

                        /** FiducialMsg position. */
                        public position?: (at.spg.protobuf.artemis.process.IVertexMsg|null);

                        /** FiducialMsg batchId. */
                        public batchId: number;

                        /**
                         * Creates a new FiducialMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FiducialMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.process.IFiducialMsg): at.spg.protobuf.artemis.process.FiducialMsg;

                        /**
                         * Encodes the specified FiducialMsg message. Does not implicitly {@link at.spg.protobuf.artemis.process.FiducialMsg.verify|verify} messages.
                         * @param message FiducialMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.process.IFiducialMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FiducialMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.process.FiducialMsg.verify|verify} messages.
                         * @param message FiducialMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.process.IFiducialMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FiducialMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FiducialMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.process.FiducialMsg;

                        /**
                         * Decodes a FiducialMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FiducialMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.process.FiducialMsg;

                        /**
                         * Verifies a FiducialMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FiducialMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FiducialMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.process.FiducialMsg;

                        /**
                         * Creates a plain object from a FiducialMsg message. Also converts values to other types if specified.
                         * @param message FiducialMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.process.FiducialMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FiducialMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a FoilProcessContextMsg. */
                    interface IFoilProcessContextMsg {

                        /** FoilProcessContextMsg id */
                        id?: (string|null);

                        /** FoilProcessContextMsg objects */
                        objects?: (at.spg.protobuf.artemis.process.IProcessObjectMsg[]|null);

                        /** FoilProcessContextMsg fiducials */
                        fiducials?: (at.spg.protobuf.artemis.process.IFiducialMsg[]|null);

                        /** FoilProcessContextMsg foilPosition */
                        foilPosition?: (number|null);

                        /** FoilProcessContextMsg currentStepInfo */
                        currentStepInfo?: (string|null);

                        /** FoilProcessContextMsg jobId */
                        jobId?: (string|null);
                    }

                    /**
                     * Route: at.spg.protobuf.artemis.process.get.activecontext
                     * Signature: Mono<FoilProcessContextMsg>()
                     */
                    class FoilProcessContextMsg implements IFoilProcessContextMsg {

                        /**
                         * Constructs a new FoilProcessContextMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.process.IFoilProcessContextMsg);

                        /** FoilProcessContextMsg id. */
                        public id: string;

                        /** FoilProcessContextMsg objects. */
                        public objects: at.spg.protobuf.artemis.process.IProcessObjectMsg[];

                        /** FoilProcessContextMsg fiducials. */
                        public fiducials: at.spg.protobuf.artemis.process.IFiducialMsg[];

                        /** FoilProcessContextMsg foilPosition. */
                        public foilPosition: number;

                        /** FoilProcessContextMsg currentStepInfo. */
                        public currentStepInfo: string;

                        /** FoilProcessContextMsg jobId. */
                        public jobId: string;

                        /**
                         * Creates a new FoilProcessContextMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FoilProcessContextMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.process.IFoilProcessContextMsg): at.spg.protobuf.artemis.process.FoilProcessContextMsg;

                        /**
                         * Encodes the specified FoilProcessContextMsg message. Does not implicitly {@link at.spg.protobuf.artemis.process.FoilProcessContextMsg.verify|verify} messages.
                         * @param message FoilProcessContextMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.process.IFoilProcessContextMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FoilProcessContextMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.process.FoilProcessContextMsg.verify|verify} messages.
                         * @param message FoilProcessContextMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.process.IFoilProcessContextMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FoilProcessContextMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FoilProcessContextMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.process.FoilProcessContextMsg;

                        /**
                         * Decodes a FoilProcessContextMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FoilProcessContextMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.process.FoilProcessContextMsg;

                        /**
                         * Verifies a FoilProcessContextMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FoilProcessContextMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FoilProcessContextMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.process.FoilProcessContextMsg;

                        /**
                         * Creates a plain object from a FoilProcessContextMsg message. Also converts values to other types if specified.
                         * @param message FoilProcessContextMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.process.FoilProcessContextMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FoilProcessContextMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a FoilProcessContextHistoryMsg. */
                    interface IFoilProcessContextHistoryMsg {

                        /** FoilProcessContextHistoryMsg history */
                        history?: (at.spg.protobuf.artemis.process.IFoilProcessContextEventMsg[]|null);
                    }

                    /** Represents a FoilProcessContextHistoryMsg. */
                    class FoilProcessContextHistoryMsg implements IFoilProcessContextHistoryMsg {

                        /**
                         * Constructs a new FoilProcessContextHistoryMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.process.IFoilProcessContextHistoryMsg);

                        /** FoilProcessContextHistoryMsg history. */
                        public history: at.spg.protobuf.artemis.process.IFoilProcessContextEventMsg[];

                        /**
                         * Creates a new FoilProcessContextHistoryMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FoilProcessContextHistoryMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.process.IFoilProcessContextHistoryMsg): at.spg.protobuf.artemis.process.FoilProcessContextHistoryMsg;

                        /**
                         * Encodes the specified FoilProcessContextHistoryMsg message. Does not implicitly {@link at.spg.protobuf.artemis.process.FoilProcessContextHistoryMsg.verify|verify} messages.
                         * @param message FoilProcessContextHistoryMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.process.IFoilProcessContextHistoryMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FoilProcessContextHistoryMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.process.FoilProcessContextHistoryMsg.verify|verify} messages.
                         * @param message FoilProcessContextHistoryMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.process.IFoilProcessContextHistoryMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FoilProcessContextHistoryMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FoilProcessContextHistoryMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.process.FoilProcessContextHistoryMsg;

                        /**
                         * Decodes a FoilProcessContextHistoryMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FoilProcessContextHistoryMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.process.FoilProcessContextHistoryMsg;

                        /**
                         * Verifies a FoilProcessContextHistoryMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FoilProcessContextHistoryMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FoilProcessContextHistoryMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.process.FoilProcessContextHistoryMsg;

                        /**
                         * Creates a plain object from a FoilProcessContextHistoryMsg message. Also converts values to other types if specified.
                         * @param message FoilProcessContextHistoryMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.process.FoilProcessContextHistoryMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FoilProcessContextHistoryMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a FoilProcessContextEventMsg. */
                    interface IFoilProcessContextEventMsg {

                        /** FoilProcessContextEventMsg timestamp */
                        timestamp?: (number|null);

                        /** FoilProcessContextEventMsg description */
                        description?: (string|null);

                        /** FoilProcessContextEventMsg error */
                        error?: (string|null);
                    }

                    /** Represents a FoilProcessContextEventMsg. */
                    class FoilProcessContextEventMsg implements IFoilProcessContextEventMsg {

                        /**
                         * Constructs a new FoilProcessContextEventMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.process.IFoilProcessContextEventMsg);

                        /** FoilProcessContextEventMsg timestamp. */
                        public timestamp: number;

                        /** FoilProcessContextEventMsg description. */
                        public description: string;

                        /** FoilProcessContextEventMsg error. */
                        public error?: (string|null);

                        /** FoilProcessContextEventMsg _error. */
                        public _error?: "error";

                        /**
                         * Creates a new FoilProcessContextEventMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FoilProcessContextEventMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.process.IFoilProcessContextEventMsg): at.spg.protobuf.artemis.process.FoilProcessContextEventMsg;

                        /**
                         * Encodes the specified FoilProcessContextEventMsg message. Does not implicitly {@link at.spg.protobuf.artemis.process.FoilProcessContextEventMsg.verify|verify} messages.
                         * @param message FoilProcessContextEventMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.process.IFoilProcessContextEventMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FoilProcessContextEventMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.process.FoilProcessContextEventMsg.verify|verify} messages.
                         * @param message FoilProcessContextEventMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.process.IFoilProcessContextEventMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FoilProcessContextEventMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FoilProcessContextEventMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.process.FoilProcessContextEventMsg;

                        /**
                         * Decodes a FoilProcessContextEventMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FoilProcessContextEventMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.process.FoilProcessContextEventMsg;

                        /**
                         * Verifies a FoilProcessContextEventMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FoilProcessContextEventMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FoilProcessContextEventMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.process.FoilProcessContextEventMsg;

                        /**
                         * Creates a plain object from a FoilProcessContextEventMsg message. Also converts values to other types if specified.
                         * @param message FoilProcessContextEventMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.process.FoilProcessContextEventMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FoilProcessContextEventMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** OffsetInformationSource enum. */
                    enum OffsetInformationSource {
                        OFFSET_INFORMATION_SOURCE_UNSPECIFIED = 0,
                        OFFSET_INFORMATION_SOURCE_INKJET = 1
                    }

                    /** Properties of an OffsetProcessReq. */
                    interface IOffsetProcessReq {

                        /** OffsetProcessReq x */
                        x?: (number|null);

                        /** OffsetProcessReq y */
                        y?: (number|null);

                        /** OffsetProcessReq source */
                        source?: (at.spg.protobuf.artemis.process.OffsetInformationSource|null);
                    }

                    /**
                     * Route: at.spg.protobuf.artemis.process.offset
                     * Signature: Mono<OffsetProcessRes>(OffsetProcessReq)
                     */
                    class OffsetProcessReq implements IOffsetProcessReq {

                        /**
                         * Constructs a new OffsetProcessReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.process.IOffsetProcessReq);

                        /** OffsetProcessReq x. */
                        public x: number;

                        /** OffsetProcessReq y. */
                        public y: number;

                        /** OffsetProcessReq source. */
                        public source: at.spg.protobuf.artemis.process.OffsetInformationSource;

                        /**
                         * Creates a new OffsetProcessReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OffsetProcessReq instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.process.IOffsetProcessReq): at.spg.protobuf.artemis.process.OffsetProcessReq;

                        /**
                         * Encodes the specified OffsetProcessReq message. Does not implicitly {@link at.spg.protobuf.artemis.process.OffsetProcessReq.verify|verify} messages.
                         * @param message OffsetProcessReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.process.IOffsetProcessReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified OffsetProcessReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.process.OffsetProcessReq.verify|verify} messages.
                         * @param message OffsetProcessReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.process.IOffsetProcessReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an OffsetProcessReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OffsetProcessReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.process.OffsetProcessReq;

                        /**
                         * Decodes an OffsetProcessReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns OffsetProcessReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.process.OffsetProcessReq;

                        /**
                         * Verifies an OffsetProcessReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an OffsetProcessReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns OffsetProcessReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.process.OffsetProcessReq;

                        /**
                         * Creates a plain object from an OffsetProcessReq message. Also converts values to other types if specified.
                         * @param message OffsetProcessReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.process.OffsetProcessReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OffsetProcessReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an OffsetProcessRes. */
                    interface IOffsetProcessRes {
                    }

                    /** Represents an OffsetProcessRes. */
                    class OffsetProcessRes implements IOffsetProcessRes {

                        /**
                         * Constructs a new OffsetProcessRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.process.IOffsetProcessRes);

                        /**
                         * Creates a new OffsetProcessRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OffsetProcessRes instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.process.IOffsetProcessRes): at.spg.protobuf.artemis.process.OffsetProcessRes;

                        /**
                         * Encodes the specified OffsetProcessRes message. Does not implicitly {@link at.spg.protobuf.artemis.process.OffsetProcessRes.verify|verify} messages.
                         * @param message OffsetProcessRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.process.IOffsetProcessRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified OffsetProcessRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.process.OffsetProcessRes.verify|verify} messages.
                         * @param message OffsetProcessRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.process.IOffsetProcessRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an OffsetProcessRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OffsetProcessRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.process.OffsetProcessRes;

                        /**
                         * Decodes an OffsetProcessRes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns OffsetProcessRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.process.OffsetProcessRes;

                        /**
                         * Verifies an OffsetProcessRes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an OffsetProcessRes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns OffsetProcessRes
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.process.OffsetProcessRes;

                        /**
                         * Creates a plain object from an OffsetProcessRes message. Also converts values to other types if specified.
                         * @param message OffsetProcessRes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.process.OffsetProcessRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OffsetProcessRes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace webrtc. */
                namespace webrtc {

                    /** WebRTCEventType enum. */
                    enum WebRTCEventType {
                        Undefined = 0,
                        PlayRequest = 1,
                        Offer = 2,
                        Answer = 3,
                        IceCandidate = 4
                    }

                    /** Properties of a WebRTCEvent. */
                    interface IWebRTCEvent {

                        /** WebRTCEvent event */
                        event?: (at.spg.protobuf.artemis.webrtc.WebRTCEventType|null);

                        /** WebRTCEvent data */
                        data?: (string|null);

                        /** WebRTCEvent sessionId */
                        sessionId?: (string|null);
                    }

                    /** Represents a WebRTCEvent. */
                    class WebRTCEvent implements IWebRTCEvent {

                        /**
                         * Constructs a new WebRTCEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.webrtc.IWebRTCEvent);

                        /** WebRTCEvent event. */
                        public event: at.spg.protobuf.artemis.webrtc.WebRTCEventType;

                        /** WebRTCEvent data. */
                        public data: string;

                        /** WebRTCEvent sessionId. */
                        public sessionId: string;

                        /**
                         * Creates a new WebRTCEvent instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns WebRTCEvent instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.webrtc.IWebRTCEvent): at.spg.protobuf.artemis.webrtc.WebRTCEvent;

                        /**
                         * Encodes the specified WebRTCEvent message. Does not implicitly {@link at.spg.protobuf.artemis.webrtc.WebRTCEvent.verify|verify} messages.
                         * @param message WebRTCEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.webrtc.IWebRTCEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified WebRTCEvent message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.webrtc.WebRTCEvent.verify|verify} messages.
                         * @param message WebRTCEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.webrtc.IWebRTCEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a WebRTCEvent message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns WebRTCEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.webrtc.WebRTCEvent;

                        /**
                         * Decodes a WebRTCEvent message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns WebRTCEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.webrtc.WebRTCEvent;

                        /**
                         * Verifies a WebRTCEvent message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a WebRTCEvent message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns WebRTCEvent
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.webrtc.WebRTCEvent;

                        /**
                         * Creates a plain object from a WebRTCEvent message. Also converts values to other types if specified.
                         * @param message WebRTCEvent
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.webrtc.WebRTCEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this WebRTCEvent to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace heatcuring. */
                namespace heatcuring {

                    /** HeaterState enum. */
                    enum HeaterState {
                        Undefined = 0,
                        Init = 1,
                        WaitingForConnection = 2,
                        Connected = 3,
                        Ready = 4,
                        StartCuring = 5,
                        Curing = 6,
                        StopCuring = 7,
                        Failed = 8,
                        End = 9
                    }

                    /** Properties of a HeaterCuringContext. */
                    interface IHeaterCuringContext {

                        /** HeaterCuringContext state */
                        state?: (at.spg.protobuf.artemis.heatcuring.HeaterState|null);

                        /** HeaterCuringContext target */
                        target?: (number|null);

                        /** HeaterCuringContext temperatures */
                        temperatures?: (number[]|null);

                        /** HeaterCuringContext meanTemperature */
                        meanTemperature?: (number|null);
                    }

                    /** Represents a HeaterCuringContext. */
                    class HeaterCuringContext implements IHeaterCuringContext {

                        /**
                         * Constructs a new HeaterCuringContext.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.heatcuring.IHeaterCuringContext);

                        /** HeaterCuringContext state. */
                        public state: at.spg.protobuf.artemis.heatcuring.HeaterState;

                        /** HeaterCuringContext target. */
                        public target: number;

                        /** HeaterCuringContext temperatures. */
                        public temperatures: number[];

                        /** HeaterCuringContext meanTemperature. */
                        public meanTemperature: number;

                        /**
                         * Creates a new HeaterCuringContext instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns HeaterCuringContext instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.heatcuring.IHeaterCuringContext): at.spg.protobuf.artemis.heatcuring.HeaterCuringContext;

                        /**
                         * Encodes the specified HeaterCuringContext message. Does not implicitly {@link at.spg.protobuf.artemis.heatcuring.HeaterCuringContext.verify|verify} messages.
                         * @param message HeaterCuringContext message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.heatcuring.IHeaterCuringContext, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified HeaterCuringContext message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.heatcuring.HeaterCuringContext.verify|verify} messages.
                         * @param message HeaterCuringContext message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.heatcuring.IHeaterCuringContext, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a HeaterCuringContext message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns HeaterCuringContext
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.heatcuring.HeaterCuringContext;

                        /**
                         * Decodes a HeaterCuringContext message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns HeaterCuringContext
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.heatcuring.HeaterCuringContext;

                        /**
                         * Verifies a HeaterCuringContext message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a HeaterCuringContext message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns HeaterCuringContext
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.heatcuring.HeaterCuringContext;

                        /**
                         * Creates a plain object from a HeaterCuringContext message. Also converts values to other types if specified.
                         * @param message HeaterCuringContext
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.heatcuring.HeaterCuringContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this HeaterCuringContext to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a HeaterReq. */
                    interface IHeaterReq {

                        /** HeaterReq temperature */
                        temperature?: (number|null);
                    }

                    /** Represents a HeaterReq. */
                    class HeaterReq implements IHeaterReq {

                        /**
                         * Constructs a new HeaterReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.heatcuring.IHeaterReq);

                        /** HeaterReq temperature. */
                        public temperature: number;

                        /**
                         * Creates a new HeaterReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns HeaterReq instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.heatcuring.IHeaterReq): at.spg.protobuf.artemis.heatcuring.HeaterReq;

                        /**
                         * Encodes the specified HeaterReq message. Does not implicitly {@link at.spg.protobuf.artemis.heatcuring.HeaterReq.verify|verify} messages.
                         * @param message HeaterReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.heatcuring.IHeaterReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified HeaterReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.heatcuring.HeaterReq.verify|verify} messages.
                         * @param message HeaterReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.heatcuring.IHeaterReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a HeaterReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns HeaterReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.heatcuring.HeaterReq;

                        /**
                         * Decodes a HeaterReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns HeaterReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.heatcuring.HeaterReq;

                        /**
                         * Verifies a HeaterReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a HeaterReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns HeaterReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.heatcuring.HeaterReq;

                        /**
                         * Creates a plain object from a HeaterReq message. Also converts values to other types if specified.
                         * @param message HeaterReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.heatcuring.HeaterReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this HeaterReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a HeaterRes. */
                    interface IHeaterRes {
                    }

                    /** Represents a HeaterRes. */
                    class HeaterRes implements IHeaterRes {

                        /**
                         * Constructs a new HeaterRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.heatcuring.IHeaterRes);

                        /**
                         * Creates a new HeaterRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns HeaterRes instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.heatcuring.IHeaterRes): at.spg.protobuf.artemis.heatcuring.HeaterRes;

                        /**
                         * Encodes the specified HeaterRes message. Does not implicitly {@link at.spg.protobuf.artemis.heatcuring.HeaterRes.verify|verify} messages.
                         * @param message HeaterRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.heatcuring.IHeaterRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified HeaterRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.heatcuring.HeaterRes.verify|verify} messages.
                         * @param message HeaterRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.heatcuring.IHeaterRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a HeaterRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns HeaterRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.heatcuring.HeaterRes;

                        /**
                         * Decodes a HeaterRes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns HeaterRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.heatcuring.HeaterRes;

                        /**
                         * Verifies a HeaterRes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a HeaterRes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns HeaterRes
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.heatcuring.HeaterRes;

                        /**
                         * Creates a plain object from a HeaterRes message. Also converts values to other types if specified.
                         * @param message HeaterRes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.heatcuring.HeaterRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this HeaterRes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Represents a LowLevelHeaterService */
                    class LowLevelHeaterService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new LowLevelHeaterService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new LowLevelHeaterService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): LowLevelHeaterService;

                        /**
                         * Calls Context.
                         * @param request LowLevelHeaterStateReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and LowLevelHeaterContext
                         */
                        public context(request: at.spg.protobuf.artemis.heatcuring.ILowLevelHeaterStateReq, callback: at.spg.protobuf.artemis.heatcuring.LowLevelHeaterService.ContextCallback): void;

                        /**
                         * Calls Context.
                         * @param request LowLevelHeaterStateReq message or plain object
                         * @returns Promise
                         */
                        public context(request: at.spg.protobuf.artemis.heatcuring.ILowLevelHeaterStateReq): Promise<at.spg.protobuf.artemis.heatcuring.LowLevelHeaterContext>;

                        /**
                         * Calls ActiveControlling.
                         * @param request LowLevelActiveControllingReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and LowLevelActiveControllingRes
                         */
                        public activeControlling(request: at.spg.protobuf.artemis.heatcuring.ILowLevelActiveControllingReq, callback: at.spg.protobuf.artemis.heatcuring.LowLevelHeaterService.ActiveControllingCallback): void;

                        /**
                         * Calls ActiveControlling.
                         * @param request LowLevelActiveControllingReq message or plain object
                         * @returns Promise
                         */
                        public activeControlling(request: at.spg.protobuf.artemis.heatcuring.ILowLevelActiveControllingReq): Promise<at.spg.protobuf.artemis.heatcuring.LowLevelActiveControllingRes>;

                        /**
                         * Calls Stop.
                         * @param request LowLevelStopReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and LowLevelStopRes
                         */
                        public stop(request: at.spg.protobuf.artemis.heatcuring.ILowLevelStopReq, callback: at.spg.protobuf.artemis.heatcuring.LowLevelHeaterService.StopCallback): void;

                        /**
                         * Calls Stop.
                         * @param request LowLevelStopReq message or plain object
                         * @returns Promise
                         */
                        public stop(request: at.spg.protobuf.artemis.heatcuring.ILowLevelStopReq): Promise<at.spg.protobuf.artemis.heatcuring.LowLevelStopRes>;
                    }

                    namespace LowLevelHeaterService {

                        /**
                         * Callback as used by {@link at.spg.protobuf.artemis.heatcuring.LowLevelHeaterService#context}.
                         * @param error Error, if any
                         * @param [response] LowLevelHeaterContext
                         */
                        type ContextCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.heatcuring.LowLevelHeaterContext) => void;

                        /**
                         * Callback as used by {@link at.spg.protobuf.artemis.heatcuring.LowLevelHeaterService#activeControlling}.
                         * @param error Error, if any
                         * @param [response] LowLevelActiveControllingRes
                         */
                        type ActiveControllingCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.heatcuring.LowLevelActiveControllingRes) => void;

                        /**
                         * Callback as used by {@link at.spg.protobuf.artemis.heatcuring.LowLevelHeaterService#stop}.
                         * @param error Error, if any
                         * @param [response] LowLevelStopRes
                         */
                        type StopCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.heatcuring.LowLevelStopRes) => void;
                    }

                    /** LowLevelHeaterState enum. */
                    enum LowLevelHeaterState {
                        LOW_LEVEL_HEATER_STATE_UNSPECIFIED = 0,
                        LOW_LEVEL_HEATER_STATE_INIT = 1,
                        LOW_LEVEL_HEATER_STATE_CONFIGURING = 2,
                        LOW_LEVEL_HEATER_STATE_READY = 3,
                        LOW_LEVEL_HEATER_STATE_RUNNING = 4,
                        LOW_LEVEL_HEATER_STATE_ERROR = 5
                    }

                    /** Properties of a LowLevelHeaterStateReq. */
                    interface ILowLevelHeaterStateReq {
                    }

                    /** Represents a LowLevelHeaterStateReq. */
                    class LowLevelHeaterStateReq implements ILowLevelHeaterStateReq {

                        /**
                         * Constructs a new LowLevelHeaterStateReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.heatcuring.ILowLevelHeaterStateReq);

                        /**
                         * Creates a new LowLevelHeaterStateReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LowLevelHeaterStateReq instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.heatcuring.ILowLevelHeaterStateReq): at.spg.protobuf.artemis.heatcuring.LowLevelHeaterStateReq;

                        /**
                         * Encodes the specified LowLevelHeaterStateReq message. Does not implicitly {@link at.spg.protobuf.artemis.heatcuring.LowLevelHeaterStateReq.verify|verify} messages.
                         * @param message LowLevelHeaterStateReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.heatcuring.ILowLevelHeaterStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LowLevelHeaterStateReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.heatcuring.LowLevelHeaterStateReq.verify|verify} messages.
                         * @param message LowLevelHeaterStateReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.heatcuring.ILowLevelHeaterStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LowLevelHeaterStateReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LowLevelHeaterStateReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.heatcuring.LowLevelHeaterStateReq;

                        /**
                         * Decodes a LowLevelHeaterStateReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LowLevelHeaterStateReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.heatcuring.LowLevelHeaterStateReq;

                        /**
                         * Verifies a LowLevelHeaterStateReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LowLevelHeaterStateReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LowLevelHeaterStateReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.heatcuring.LowLevelHeaterStateReq;

                        /**
                         * Creates a plain object from a LowLevelHeaterStateReq message. Also converts values to other types if specified.
                         * @param message LowLevelHeaterStateReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.heatcuring.LowLevelHeaterStateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LowLevelHeaterStateReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a LowLevelHeaterContext. */
                    interface ILowLevelHeaterContext {

                        /** LowLevelHeaterContext active */
                        active?: (boolean|null);

                        /** LowLevelHeaterContext targetOutput */
                        targetOutput?: (number|null);

                        /** LowLevelHeaterContext measuredValues */
                        measuredValues?: (number[]|null);

                        /** LowLevelHeaterContext setpoint */
                        setpoint?: (number|null);

                        /** LowLevelHeaterContext state */
                        state?: (at.spg.protobuf.artemis.heatcuring.LowLevelHeaterState|null);
                    }

                    /** Represents a LowLevelHeaterContext. */
                    class LowLevelHeaterContext implements ILowLevelHeaterContext {

                        /**
                         * Constructs a new LowLevelHeaterContext.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.heatcuring.ILowLevelHeaterContext);

                        /** LowLevelHeaterContext active. */
                        public active: boolean;

                        /** LowLevelHeaterContext targetOutput. */
                        public targetOutput: number;

                        /** LowLevelHeaterContext measuredValues. */
                        public measuredValues: number[];

                        /** LowLevelHeaterContext setpoint. */
                        public setpoint: number;

                        /** LowLevelHeaterContext state. */
                        public state: at.spg.protobuf.artemis.heatcuring.LowLevelHeaterState;

                        /**
                         * Creates a new LowLevelHeaterContext instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LowLevelHeaterContext instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.heatcuring.ILowLevelHeaterContext): at.spg.protobuf.artemis.heatcuring.LowLevelHeaterContext;

                        /**
                         * Encodes the specified LowLevelHeaterContext message. Does not implicitly {@link at.spg.protobuf.artemis.heatcuring.LowLevelHeaterContext.verify|verify} messages.
                         * @param message LowLevelHeaterContext message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.heatcuring.ILowLevelHeaterContext, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LowLevelHeaterContext message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.heatcuring.LowLevelHeaterContext.verify|verify} messages.
                         * @param message LowLevelHeaterContext message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.heatcuring.ILowLevelHeaterContext, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LowLevelHeaterContext message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LowLevelHeaterContext
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.heatcuring.LowLevelHeaterContext;

                        /**
                         * Decodes a LowLevelHeaterContext message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LowLevelHeaterContext
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.heatcuring.LowLevelHeaterContext;

                        /**
                         * Verifies a LowLevelHeaterContext message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LowLevelHeaterContext message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LowLevelHeaterContext
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.heatcuring.LowLevelHeaterContext;

                        /**
                         * Creates a plain object from a LowLevelHeaterContext message. Also converts values to other types if specified.
                         * @param message LowLevelHeaterContext
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.heatcuring.LowLevelHeaterContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LowLevelHeaterContext to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a LowLevelActiveControllingReq. */
                    interface ILowLevelActiveControllingReq {

                        /** LowLevelActiveControllingReq targetTemperature */
                        targetTemperature?: (number|null);
                    }

                    /** Represents a LowLevelActiveControllingReq. */
                    class LowLevelActiveControllingReq implements ILowLevelActiveControllingReq {

                        /**
                         * Constructs a new LowLevelActiveControllingReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.heatcuring.ILowLevelActiveControllingReq);

                        /** LowLevelActiveControllingReq targetTemperature. */
                        public targetTemperature: number;

                        /**
                         * Creates a new LowLevelActiveControllingReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LowLevelActiveControllingReq instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.heatcuring.ILowLevelActiveControllingReq): at.spg.protobuf.artemis.heatcuring.LowLevelActiveControllingReq;

                        /**
                         * Encodes the specified LowLevelActiveControllingReq message. Does not implicitly {@link at.spg.protobuf.artemis.heatcuring.LowLevelActiveControllingReq.verify|verify} messages.
                         * @param message LowLevelActiveControllingReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.heatcuring.ILowLevelActiveControllingReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LowLevelActiveControllingReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.heatcuring.LowLevelActiveControllingReq.verify|verify} messages.
                         * @param message LowLevelActiveControllingReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.heatcuring.ILowLevelActiveControllingReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LowLevelActiveControllingReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LowLevelActiveControllingReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.heatcuring.LowLevelActiveControllingReq;

                        /**
                         * Decodes a LowLevelActiveControllingReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LowLevelActiveControllingReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.heatcuring.LowLevelActiveControllingReq;

                        /**
                         * Verifies a LowLevelActiveControllingReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LowLevelActiveControllingReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LowLevelActiveControllingReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.heatcuring.LowLevelActiveControllingReq;

                        /**
                         * Creates a plain object from a LowLevelActiveControllingReq message. Also converts values to other types if specified.
                         * @param message LowLevelActiveControllingReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.heatcuring.LowLevelActiveControllingReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LowLevelActiveControllingReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a LowLevelActiveControllingRes. */
                    interface ILowLevelActiveControllingRes {
                    }

                    /** Represents a LowLevelActiveControllingRes. */
                    class LowLevelActiveControllingRes implements ILowLevelActiveControllingRes {

                        /**
                         * Constructs a new LowLevelActiveControllingRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.heatcuring.ILowLevelActiveControllingRes);

                        /**
                         * Creates a new LowLevelActiveControllingRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LowLevelActiveControllingRes instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.heatcuring.ILowLevelActiveControllingRes): at.spg.protobuf.artemis.heatcuring.LowLevelActiveControllingRes;

                        /**
                         * Encodes the specified LowLevelActiveControllingRes message. Does not implicitly {@link at.spg.protobuf.artemis.heatcuring.LowLevelActiveControllingRes.verify|verify} messages.
                         * @param message LowLevelActiveControllingRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.heatcuring.ILowLevelActiveControllingRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LowLevelActiveControllingRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.heatcuring.LowLevelActiveControllingRes.verify|verify} messages.
                         * @param message LowLevelActiveControllingRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.heatcuring.ILowLevelActiveControllingRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LowLevelActiveControllingRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LowLevelActiveControllingRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.heatcuring.LowLevelActiveControllingRes;

                        /**
                         * Decodes a LowLevelActiveControllingRes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LowLevelActiveControllingRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.heatcuring.LowLevelActiveControllingRes;

                        /**
                         * Verifies a LowLevelActiveControllingRes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LowLevelActiveControllingRes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LowLevelActiveControllingRes
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.heatcuring.LowLevelActiveControllingRes;

                        /**
                         * Creates a plain object from a LowLevelActiveControllingRes message. Also converts values to other types if specified.
                         * @param message LowLevelActiveControllingRes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.heatcuring.LowLevelActiveControllingRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LowLevelActiveControllingRes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a LowLevelStopReq. */
                    interface ILowLevelStopReq {
                    }

                    /** Represents a LowLevelStopReq. */
                    class LowLevelStopReq implements ILowLevelStopReq {

                        /**
                         * Constructs a new LowLevelStopReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.heatcuring.ILowLevelStopReq);

                        /**
                         * Creates a new LowLevelStopReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LowLevelStopReq instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.heatcuring.ILowLevelStopReq): at.spg.protobuf.artemis.heatcuring.LowLevelStopReq;

                        /**
                         * Encodes the specified LowLevelStopReq message. Does not implicitly {@link at.spg.protobuf.artemis.heatcuring.LowLevelStopReq.verify|verify} messages.
                         * @param message LowLevelStopReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.heatcuring.ILowLevelStopReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LowLevelStopReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.heatcuring.LowLevelStopReq.verify|verify} messages.
                         * @param message LowLevelStopReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.heatcuring.ILowLevelStopReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LowLevelStopReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LowLevelStopReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.heatcuring.LowLevelStopReq;

                        /**
                         * Decodes a LowLevelStopReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LowLevelStopReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.heatcuring.LowLevelStopReq;

                        /**
                         * Verifies a LowLevelStopReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LowLevelStopReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LowLevelStopReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.heatcuring.LowLevelStopReq;

                        /**
                         * Creates a plain object from a LowLevelStopReq message. Also converts values to other types if specified.
                         * @param message LowLevelStopReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.heatcuring.LowLevelStopReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LowLevelStopReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a LowLevelStopRes. */
                    interface ILowLevelStopRes {
                    }

                    /** Represents a LowLevelStopRes. */
                    class LowLevelStopRes implements ILowLevelStopRes {

                        /**
                         * Constructs a new LowLevelStopRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.heatcuring.ILowLevelStopRes);

                        /**
                         * Creates a new LowLevelStopRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LowLevelStopRes instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.heatcuring.ILowLevelStopRes): at.spg.protobuf.artemis.heatcuring.LowLevelStopRes;

                        /**
                         * Encodes the specified LowLevelStopRes message. Does not implicitly {@link at.spg.protobuf.artemis.heatcuring.LowLevelStopRes.verify|verify} messages.
                         * @param message LowLevelStopRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.heatcuring.ILowLevelStopRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LowLevelStopRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.heatcuring.LowLevelStopRes.verify|verify} messages.
                         * @param message LowLevelStopRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.heatcuring.ILowLevelStopRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LowLevelStopRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LowLevelStopRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.heatcuring.LowLevelStopRes;

                        /**
                         * Decodes a LowLevelStopRes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LowLevelStopRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.heatcuring.LowLevelStopRes;

                        /**
                         * Verifies a LowLevelStopRes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LowLevelStopRes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LowLevelStopRes
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.heatcuring.LowLevelStopRes;

                        /**
                         * Creates a plain object from a LowLevelStopRes message. Also converts values to other types if specified.
                         * @param message LowLevelStopRes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.heatcuring.LowLevelStopRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LowLevelStopRes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace io. */
                namespace io {

                    /** Properties of a DigitalInput. */
                    interface IDigitalInput {

                        /** DigitalInput name */
                        name?: (string|null);

                        /** DigitalInput state */
                        state?: (boolean|null);
                    }

                    /** Represents a DigitalInput. */
                    class DigitalInput implements IDigitalInput {

                        /**
                         * Constructs a new DigitalInput.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.io.IDigitalInput);

                        /** DigitalInput name. */
                        public name: string;

                        /** DigitalInput state. */
                        public state: boolean;

                        /**
                         * Creates a new DigitalInput instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DigitalInput instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.io.IDigitalInput): at.spg.protobuf.artemis.io.DigitalInput;

                        /**
                         * Encodes the specified DigitalInput message. Does not implicitly {@link at.spg.protobuf.artemis.io.DigitalInput.verify|verify} messages.
                         * @param message DigitalInput message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.io.IDigitalInput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DigitalInput message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.io.DigitalInput.verify|verify} messages.
                         * @param message DigitalInput message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.io.IDigitalInput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DigitalInput message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DigitalInput
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.io.DigitalInput;

                        /**
                         * Decodes a DigitalInput message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DigitalInput
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.io.DigitalInput;

                        /**
                         * Verifies a DigitalInput message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DigitalInput message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DigitalInput
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.io.DigitalInput;

                        /**
                         * Creates a plain object from a DigitalInput message. Also converts values to other types if specified.
                         * @param message DigitalInput
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.io.DigitalInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DigitalInput to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DigitalOutput. */
                    interface IDigitalOutput {

                        /** DigitalOutput name */
                        name?: (string|null);

                        /** DigitalOutput state */
                        state?: (boolean|null);
                    }

                    /** Represents a DigitalOutput. */
                    class DigitalOutput implements IDigitalOutput {

                        /**
                         * Constructs a new DigitalOutput.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.io.IDigitalOutput);

                        /** DigitalOutput name. */
                        public name: string;

                        /** DigitalOutput state. */
                        public state: boolean;

                        /**
                         * Creates a new DigitalOutput instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DigitalOutput instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.io.IDigitalOutput): at.spg.protobuf.artemis.io.DigitalOutput;

                        /**
                         * Encodes the specified DigitalOutput message. Does not implicitly {@link at.spg.protobuf.artemis.io.DigitalOutput.verify|verify} messages.
                         * @param message DigitalOutput message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.io.IDigitalOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DigitalOutput message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.io.DigitalOutput.verify|verify} messages.
                         * @param message DigitalOutput message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.io.IDigitalOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DigitalOutput message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DigitalOutput
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.io.DigitalOutput;

                        /**
                         * Decodes a DigitalOutput message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DigitalOutput
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.io.DigitalOutput;

                        /**
                         * Verifies a DigitalOutput message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DigitalOutput message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DigitalOutput
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.io.DigitalOutput;

                        /**
                         * Creates a plain object from a DigitalOutput message. Also converts values to other types if specified.
                         * @param message DigitalOutput
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.io.DigitalOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DigitalOutput to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AnalogInput. */
                    interface IAnalogInput {

                        /** AnalogInput name */
                        name?: (string|null);

                        /** AnalogInput value */
                        value?: (number|null);
                    }

                    /** Represents an AnalogInput. */
                    class AnalogInput implements IAnalogInput {

                        /**
                         * Constructs a new AnalogInput.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.io.IAnalogInput);

                        /** AnalogInput name. */
                        public name: string;

                        /** AnalogInput value. */
                        public value: number;

                        /**
                         * Creates a new AnalogInput instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AnalogInput instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.io.IAnalogInput): at.spg.protobuf.artemis.io.AnalogInput;

                        /**
                         * Encodes the specified AnalogInput message. Does not implicitly {@link at.spg.protobuf.artemis.io.AnalogInput.verify|verify} messages.
                         * @param message AnalogInput message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.io.IAnalogInput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AnalogInput message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.io.AnalogInput.verify|verify} messages.
                         * @param message AnalogInput message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.io.IAnalogInput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AnalogInput message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AnalogInput
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.io.AnalogInput;

                        /**
                         * Decodes an AnalogInput message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AnalogInput
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.io.AnalogInput;

                        /**
                         * Verifies an AnalogInput message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AnalogInput message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AnalogInput
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.io.AnalogInput;

                        /**
                         * Creates a plain object from an AnalogInput message. Also converts values to other types if specified.
                         * @param message AnalogInput
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.io.AnalogInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AnalogInput to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AnalogOutput. */
                    interface IAnalogOutput {

                        /** AnalogOutput name */
                        name?: (string|null);

                        /** AnalogOutput value */
                        value?: (number|null);
                    }

                    /** Represents an AnalogOutput. */
                    class AnalogOutput implements IAnalogOutput {

                        /**
                         * Constructs a new AnalogOutput.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.io.IAnalogOutput);

                        /** AnalogOutput name. */
                        public name: string;

                        /** AnalogOutput value. */
                        public value: number;

                        /**
                         * Creates a new AnalogOutput instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AnalogOutput instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.io.IAnalogOutput): at.spg.protobuf.artemis.io.AnalogOutput;

                        /**
                         * Encodes the specified AnalogOutput message. Does not implicitly {@link at.spg.protobuf.artemis.io.AnalogOutput.verify|verify} messages.
                         * @param message AnalogOutput message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.io.IAnalogOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AnalogOutput message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.io.AnalogOutput.verify|verify} messages.
                         * @param message AnalogOutput message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.io.IAnalogOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AnalogOutput message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AnalogOutput
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.io.AnalogOutput;

                        /**
                         * Decodes an AnalogOutput message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AnalogOutput
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.io.AnalogOutput;

                        /**
                         * Verifies an AnalogOutput message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AnalogOutput message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AnalogOutput
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.io.AnalogOutput;

                        /**
                         * Creates a plain object from an AnalogOutput message. Also converts values to other types if specified.
                         * @param message AnalogOutput
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.io.AnalogOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AnalogOutput to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Represents a RevPiClampService */
                    class RevPiClampService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new RevPiClampService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new RevPiClampService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): RevPiClampService;

                        /**
                         * Calls IoStateStream.
                         * @param request IoStateReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and IoState
                         */
                        public ioStateStream(request: at.spg.protobuf.artemis.io.IIoStateReq, callback: at.spg.protobuf.artemis.io.RevPiClampService.IoStateStreamCallback): void;

                        /**
                         * Calls IoStateStream.
                         * @param request IoStateReq message or plain object
                         * @returns Promise
                         */
                        public ioStateStream(request: at.spg.protobuf.artemis.io.IIoStateReq): Promise<at.spg.protobuf.artemis.io.IoState>;

                        /**
                         * Calls SetIo.
                         * @param request IoValueReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and IoValueRes
                         */
                        public setIo(request: at.spg.protobuf.artemis.io.IIoValueReq, callback: at.spg.protobuf.artemis.io.RevPiClampService.SetIoCallback): void;

                        /**
                         * Calls SetIo.
                         * @param request IoValueReq message or plain object
                         * @returns Promise
                         */
                        public setIo(request: at.spg.protobuf.artemis.io.IIoValueReq): Promise<at.spg.protobuf.artemis.io.IoValueRes>;
                    }

                    namespace RevPiClampService {

                        /**
                         * Callback as used by {@link at.spg.protobuf.artemis.io.RevPiClampService#ioStateStream}.
                         * @param error Error, if any
                         * @param [response] IoState
                         */
                        type IoStateStreamCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.io.IoState) => void;

                        /**
                         * Callback as used by {@link at.spg.protobuf.artemis.io.RevPiClampService#setIo}.
                         * @param error Error, if any
                         * @param [response] IoValueRes
                         */
                        type SetIoCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.io.IoValueRes) => void;
                    }

                    /** Properties of an IoStateReq. */
                    interface IIoStateReq {

                        /** IoStateReq intervalInSeconds */
                        intervalInSeconds?: (number|null);
                    }

                    /**
                     * Route: at.spg.protobuf.artemis.io.state
                     * Signature: Flux<IOState>(IoStateReq)
                     */
                    class IoStateReq implements IIoStateReq {

                        /**
                         * Constructs a new IoStateReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.io.IIoStateReq);

                        /** IoStateReq intervalInSeconds. */
                        public intervalInSeconds: number;

                        /**
                         * Creates a new IoStateReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IoStateReq instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.io.IIoStateReq): at.spg.protobuf.artemis.io.IoStateReq;

                        /**
                         * Encodes the specified IoStateReq message. Does not implicitly {@link at.spg.protobuf.artemis.io.IoStateReq.verify|verify} messages.
                         * @param message IoStateReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.io.IIoStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IoStateReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.io.IoStateReq.verify|verify} messages.
                         * @param message IoStateReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.io.IIoStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IoStateReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IoStateReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.io.IoStateReq;

                        /**
                         * Decodes an IoStateReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IoStateReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.io.IoStateReq;

                        /**
                         * Verifies an IoStateReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IoStateReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IoStateReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.io.IoStateReq;

                        /**
                         * Creates a plain object from an IoStateReq message. Also converts values to other types if specified.
                         * @param message IoStateReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.io.IoStateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IoStateReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an IoState. */
                    interface IIoState {

                        /** IoState digitalInputs */
                        digitalInputs?: (at.spg.protobuf.artemis.io.IDigitalInput[]|null);

                        /** IoState digitalOutputs */
                        digitalOutputs?: (at.spg.protobuf.artemis.io.IDigitalOutput[]|null);

                        /** IoState analogInputs */
                        analogInputs?: (at.spg.protobuf.artemis.io.IAnalogInput[]|null);

                        /** IoState analogOutputs */
                        analogOutputs?: (at.spg.protobuf.artemis.io.IAnalogOutput[]|null);
                    }

                    /** Represents an IoState. */
                    class IoState implements IIoState {

                        /**
                         * Constructs a new IoState.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.io.IIoState);

                        /** IoState digitalInputs. */
                        public digitalInputs: at.spg.protobuf.artemis.io.IDigitalInput[];

                        /** IoState digitalOutputs. */
                        public digitalOutputs: at.spg.protobuf.artemis.io.IDigitalOutput[];

                        /** IoState analogInputs. */
                        public analogInputs: at.spg.protobuf.artemis.io.IAnalogInput[];

                        /** IoState analogOutputs. */
                        public analogOutputs: at.spg.protobuf.artemis.io.IAnalogOutput[];

                        /**
                         * Creates a new IoState instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IoState instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.io.IIoState): at.spg.protobuf.artemis.io.IoState;

                        /**
                         * Encodes the specified IoState message. Does not implicitly {@link at.spg.protobuf.artemis.io.IoState.verify|verify} messages.
                         * @param message IoState message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.io.IIoState, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IoState message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.io.IoState.verify|verify} messages.
                         * @param message IoState message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.io.IIoState, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IoState message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IoState
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.io.IoState;

                        /**
                         * Decodes an IoState message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IoState
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.io.IoState;

                        /**
                         * Verifies an IoState message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IoState message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IoState
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.io.IoState;

                        /**
                         * Creates a plain object from an IoState message. Also converts values to other types if specified.
                         * @param message IoState
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.io.IoState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IoState to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an IoValueReq. */
                    interface IIoValueReq {

                        /** IoValueReq digitalOutput */
                        digitalOutput?: (at.spg.protobuf.artemis.io.IDigitalOutput|null);

                        /** IoValueReq analogOutput */
                        analogOutput?: (at.spg.protobuf.artemis.io.IAnalogOutput|null);
                    }

                    /**
                     * Route: at.spg.protobuf.artemis.io.req
                     * Signature: Mono<IoValueRes>(IoValueReq)
                     */
                    class IoValueReq implements IIoValueReq {

                        /**
                         * Constructs a new IoValueReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.io.IIoValueReq);

                        /** IoValueReq digitalOutput. */
                        public digitalOutput?: (at.spg.protobuf.artemis.io.IDigitalOutput|null);

                        /** IoValueReq analogOutput. */
                        public analogOutput?: (at.spg.protobuf.artemis.io.IAnalogOutput|null);

                        /** IoValueReq io. */
                        public io?: ("digitalOutput"|"analogOutput");

                        /**
                         * Creates a new IoValueReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IoValueReq instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.io.IIoValueReq): at.spg.protobuf.artemis.io.IoValueReq;

                        /**
                         * Encodes the specified IoValueReq message. Does not implicitly {@link at.spg.protobuf.artemis.io.IoValueReq.verify|verify} messages.
                         * @param message IoValueReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.io.IIoValueReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IoValueReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.io.IoValueReq.verify|verify} messages.
                         * @param message IoValueReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.io.IIoValueReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IoValueReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IoValueReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.io.IoValueReq;

                        /**
                         * Decodes an IoValueReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IoValueReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.io.IoValueReq;

                        /**
                         * Verifies an IoValueReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IoValueReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IoValueReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.io.IoValueReq;

                        /**
                         * Creates a plain object from an IoValueReq message. Also converts values to other types if specified.
                         * @param message IoValueReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.io.IoValueReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IoValueReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an IoValueRes. */
                    interface IIoValueRes {

                        /** IoValueRes successful */
                        successful?: (boolean|null);

                        /** IoValueRes error */
                        error?: (string|null);
                    }

                    /** Represents an IoValueRes. */
                    class IoValueRes implements IIoValueRes {

                        /**
                         * Constructs a new IoValueRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.io.IIoValueRes);

                        /** IoValueRes successful. */
                        public successful: boolean;

                        /** IoValueRes error. */
                        public error: string;

                        /**
                         * Creates a new IoValueRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IoValueRes instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.io.IIoValueRes): at.spg.protobuf.artemis.io.IoValueRes;

                        /**
                         * Encodes the specified IoValueRes message. Does not implicitly {@link at.spg.protobuf.artemis.io.IoValueRes.verify|verify} messages.
                         * @param message IoValueRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.io.IIoValueRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IoValueRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.io.IoValueRes.verify|verify} messages.
                         * @param message IoValueRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.io.IIoValueRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IoValueRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IoValueRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.io.IoValueRes;

                        /**
                         * Decodes an IoValueRes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IoValueRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.io.IoValueRes;

                        /**
                         * Verifies an IoValueRes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IoValueRes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IoValueRes
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.io.IoValueRes;

                        /**
                         * Creates a plain object from an IoValueRes message. Also converts values to other types if specified.
                         * @param message IoValueRes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.io.IoValueRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IoValueRes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace job. */
                namespace job {

                    /** Properties of a FoilDefinitionMsg. */
                    interface IFoilDefinitionMsg {

                        /** FoilDefinitionMsg lengthMm */
                        lengthMm?: (number|null);

                        /** FoilDefinitionMsg widthMm */
                        widthMm?: (number|null);

                        /** FoilDefinitionMsg materialReference */
                        materialReference?: (string|null);
                    }

                    /** Represents a FoilDefinitionMsg. */
                    class FoilDefinitionMsg implements IFoilDefinitionMsg {

                        /**
                         * Constructs a new FoilDefinitionMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.job.IFoilDefinitionMsg);

                        /** FoilDefinitionMsg lengthMm. */
                        public lengthMm: number;

                        /** FoilDefinitionMsg widthMm. */
                        public widthMm: number;

                        /** FoilDefinitionMsg materialReference. */
                        public materialReference: string;

                        /**
                         * Creates a new FoilDefinitionMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FoilDefinitionMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.job.IFoilDefinitionMsg): at.spg.protobuf.artemis.job.FoilDefinitionMsg;

                        /**
                         * Encodes the specified FoilDefinitionMsg message. Does not implicitly {@link at.spg.protobuf.artemis.job.FoilDefinitionMsg.verify|verify} messages.
                         * @param message FoilDefinitionMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.job.IFoilDefinitionMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FoilDefinitionMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.job.FoilDefinitionMsg.verify|verify} messages.
                         * @param message FoilDefinitionMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.job.IFoilDefinitionMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FoilDefinitionMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FoilDefinitionMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.job.FoilDefinitionMsg;

                        /**
                         * Decodes a FoilDefinitionMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FoilDefinitionMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.job.FoilDefinitionMsg;

                        /**
                         * Verifies a FoilDefinitionMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FoilDefinitionMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FoilDefinitionMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.job.FoilDefinitionMsg;

                        /**
                         * Creates a plain object from a FoilDefinitionMsg message. Also converts values to other types if specified.
                         * @param message FoilDefinitionMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.job.FoilDefinitionMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FoilDefinitionMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ProcessBatchMsg. */
                    interface IProcessBatchMsg {

                        /** ProcessBatchMsg batchId */
                        batchId?: (string|null);

                        /** ProcessBatchMsg objects */
                        objects?: (at.spg.protobuf.artemis.process.IProcessObjectMsg[]|null);

                        /** ProcessBatchMsg fiducials */
                        fiducials?: (at.spg.protobuf.artemis.process.IFiducialMsg[]|null);

                        /** ProcessBatchMsg refBatchId */
                        refBatchId?: (string|null);

                        /** ProcessBatchMsg offset */
                        offset?: (number|null);
                    }

                    /** Represents a ProcessBatchMsg. */
                    class ProcessBatchMsg implements IProcessBatchMsg {

                        /**
                         * Constructs a new ProcessBatchMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.job.IProcessBatchMsg);

                        /** ProcessBatchMsg batchId. */
                        public batchId: string;

                        /** ProcessBatchMsg objects. */
                        public objects: at.spg.protobuf.artemis.process.IProcessObjectMsg[];

                        /** ProcessBatchMsg fiducials. */
                        public fiducials: at.spg.protobuf.artemis.process.IFiducialMsg[];

                        /** ProcessBatchMsg refBatchId. */
                        public refBatchId: string;

                        /** ProcessBatchMsg offset. */
                        public offset: number;

                        /**
                         * Creates a new ProcessBatchMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProcessBatchMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.job.IProcessBatchMsg): at.spg.protobuf.artemis.job.ProcessBatchMsg;

                        /**
                         * Encodes the specified ProcessBatchMsg message. Does not implicitly {@link at.spg.protobuf.artemis.job.ProcessBatchMsg.verify|verify} messages.
                         * @param message ProcessBatchMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.job.IProcessBatchMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProcessBatchMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.job.ProcessBatchMsg.verify|verify} messages.
                         * @param message ProcessBatchMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.job.IProcessBatchMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProcessBatchMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProcessBatchMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.job.ProcessBatchMsg;

                        /**
                         * Decodes a ProcessBatchMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProcessBatchMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.job.ProcessBatchMsg;

                        /**
                         * Verifies a ProcessBatchMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProcessBatchMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProcessBatchMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.job.ProcessBatchMsg;

                        /**
                         * Creates a plain object from a ProcessBatchMsg message. Also converts values to other types if specified.
                         * @param message ProcessBatchMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.job.ProcessBatchMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProcessBatchMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ProcessDefinitionMsg. */
                    interface IProcessDefinitionMsg {

                        /** ProcessDefinitionMsg laserReference */
                        laserReference?: (string|null);

                        /** ProcessDefinitionMsg dielectricReference */
                        dielectricReference?: (string|null);

                        /** ProcessDefinitionMsg silverReference */
                        silverReference?: (string|null);

                        /** ProcessDefinitionMsg conveyorSpeedMmS */
                        conveyorSpeedMmS?: (number|null);

                        /** ProcessDefinitionMsg uvCuringPower */
                        uvCuringPower?: (number|null);

                        /** ProcessDefinitionMsg uvCuringTimeS */
                        uvCuringTimeS?: (number|null);

                        /** ProcessDefinitionMsg heatCuringTimeS */
                        heatCuringTimeS?: (number|null);

                        /** ProcessDefinitionMsg heatCuringTemp */
                        heatCuringTemp?: (number|null);

                        /** ProcessDefinitionMsg dielectricPrintSettings */
                        dielectricPrintSettings?: (at.spg.protobuf.artemis.remote.dielectric.IDoWorkInAreaReq|null);

                        /** ProcessDefinitionMsg dielectricPreHeatSettings */
                        dielectricPreHeatSettings?: (at.spg.protobuf.artemis.remote.dielectric.IPreHeatReq|null);

                        /** ProcessDefinitionMsg batches */
                        batches?: (at.spg.protobuf.artemis.job.IProcessBatchMsg[]|null);
                    }

                    /** Represents a ProcessDefinitionMsg. */
                    class ProcessDefinitionMsg implements IProcessDefinitionMsg {

                        /**
                         * Constructs a new ProcessDefinitionMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.job.IProcessDefinitionMsg);

                        /** ProcessDefinitionMsg laserReference. */
                        public laserReference: string;

                        /** ProcessDefinitionMsg dielectricReference. */
                        public dielectricReference: string;

                        /** ProcessDefinitionMsg silverReference. */
                        public silverReference: string;

                        /** ProcessDefinitionMsg conveyorSpeedMmS. */
                        public conveyorSpeedMmS: number;

                        /** ProcessDefinitionMsg uvCuringPower. */
                        public uvCuringPower: number;

                        /** ProcessDefinitionMsg uvCuringTimeS. */
                        public uvCuringTimeS: number;

                        /** ProcessDefinitionMsg heatCuringTimeS. */
                        public heatCuringTimeS: number;

                        /** ProcessDefinitionMsg heatCuringTemp. */
                        public heatCuringTemp: number;

                        /** ProcessDefinitionMsg dielectricPrintSettings. */
                        public dielectricPrintSettings?: (at.spg.protobuf.artemis.remote.dielectric.IDoWorkInAreaReq|null);

                        /** ProcessDefinitionMsg dielectricPreHeatSettings. */
                        public dielectricPreHeatSettings?: (at.spg.protobuf.artemis.remote.dielectric.IPreHeatReq|null);

                        /** ProcessDefinitionMsg batches. */
                        public batches: at.spg.protobuf.artemis.job.IProcessBatchMsg[];

                        /**
                         * Creates a new ProcessDefinitionMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProcessDefinitionMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.job.IProcessDefinitionMsg): at.spg.protobuf.artemis.job.ProcessDefinitionMsg;

                        /**
                         * Encodes the specified ProcessDefinitionMsg message. Does not implicitly {@link at.spg.protobuf.artemis.job.ProcessDefinitionMsg.verify|verify} messages.
                         * @param message ProcessDefinitionMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.job.IProcessDefinitionMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProcessDefinitionMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.job.ProcessDefinitionMsg.verify|verify} messages.
                         * @param message ProcessDefinitionMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.job.IProcessDefinitionMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProcessDefinitionMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProcessDefinitionMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.job.ProcessDefinitionMsg;

                        /**
                         * Decodes a ProcessDefinitionMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProcessDefinitionMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.job.ProcessDefinitionMsg;

                        /**
                         * Verifies a ProcessDefinitionMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProcessDefinitionMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProcessDefinitionMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.job.ProcessDefinitionMsg;

                        /**
                         * Creates a plain object from a ProcessDefinitionMsg message. Also converts values to other types if specified.
                         * @param message ProcessDefinitionMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.job.ProcessDefinitionMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProcessDefinitionMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a JobDefinitionMsg. */
                    interface IJobDefinitionMsg {

                        /** JobDefinitionMsg foilDefinition */
                        foilDefinition?: (at.spg.protobuf.artemis.job.IFoilDefinitionMsg|null);

                        /** JobDefinitionMsg processDefinition */
                        processDefinition?: (at.spg.protobuf.artemis.job.IProcessDefinitionMsg|null);
                    }

                    /** Represents a JobDefinitionMsg. */
                    class JobDefinitionMsg implements IJobDefinitionMsg {

                        /**
                         * Constructs a new JobDefinitionMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.job.IJobDefinitionMsg);

                        /** JobDefinitionMsg foilDefinition. */
                        public foilDefinition?: (at.spg.protobuf.artemis.job.IFoilDefinitionMsg|null);

                        /** JobDefinitionMsg processDefinition. */
                        public processDefinition?: (at.spg.protobuf.artemis.job.IProcessDefinitionMsg|null);

                        /**
                         * Creates a new JobDefinitionMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns JobDefinitionMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.job.IJobDefinitionMsg): at.spg.protobuf.artemis.job.JobDefinitionMsg;

                        /**
                         * Encodes the specified JobDefinitionMsg message. Does not implicitly {@link at.spg.protobuf.artemis.job.JobDefinitionMsg.verify|verify} messages.
                         * @param message JobDefinitionMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.job.IJobDefinitionMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified JobDefinitionMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.job.JobDefinitionMsg.verify|verify} messages.
                         * @param message JobDefinitionMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.job.IJobDefinitionMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a JobDefinitionMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns JobDefinitionMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.job.JobDefinitionMsg;

                        /**
                         * Decodes a JobDefinitionMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns JobDefinitionMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.job.JobDefinitionMsg;

                        /**
                         * Verifies a JobDefinitionMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a JobDefinitionMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns JobDefinitionMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.job.JobDefinitionMsg;

                        /**
                         * Creates a plain object from a JobDefinitionMsg message. Also converts values to other types if specified.
                         * @param message JobDefinitionMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.job.JobDefinitionMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this JobDefinitionMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** JobStateE enum. */
                    enum JobStateE {
                        UndefinedJobStatus = 0,
                        InConfiguration = 1,
                        ReadyToProcess = 2,
                        LoadedIntoMachine = 3,
                        Processing = 4,
                        Completed = 5,
                        Failed = 6
                    }

                    /** Properties of a JobStatusChangedMsg. */
                    interface IJobStatusChangedMsg {

                        /** JobStatusChangedMsg previous */
                        previous?: (at.spg.protobuf.artemis.job.JobStateE|null);

                        /** JobStatusChangedMsg next */
                        next?: (at.spg.protobuf.artemis.job.JobStateE|null);

                        /** JobStatusChangedMsg datetime */
                        datetime?: (number|null);

                        /** JobStatusChangedMsg info */
                        info?: (string|null);
                    }

                    /** Represents a JobStatusChangedMsg. */
                    class JobStatusChangedMsg implements IJobStatusChangedMsg {

                        /**
                         * Constructs a new JobStatusChangedMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.job.IJobStatusChangedMsg);

                        /** JobStatusChangedMsg previous. */
                        public previous: at.spg.protobuf.artemis.job.JobStateE;

                        /** JobStatusChangedMsg next. */
                        public next: at.spg.protobuf.artemis.job.JobStateE;

                        /** JobStatusChangedMsg datetime. */
                        public datetime: number;

                        /** JobStatusChangedMsg info. */
                        public info: string;

                        /**
                         * Creates a new JobStatusChangedMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns JobStatusChangedMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.job.IJobStatusChangedMsg): at.spg.protobuf.artemis.job.JobStatusChangedMsg;

                        /**
                         * Encodes the specified JobStatusChangedMsg message. Does not implicitly {@link at.spg.protobuf.artemis.job.JobStatusChangedMsg.verify|verify} messages.
                         * @param message JobStatusChangedMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.job.IJobStatusChangedMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified JobStatusChangedMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.job.JobStatusChangedMsg.verify|verify} messages.
                         * @param message JobStatusChangedMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.job.IJobStatusChangedMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a JobStatusChangedMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns JobStatusChangedMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.job.JobStatusChangedMsg;

                        /**
                         * Decodes a JobStatusChangedMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns JobStatusChangedMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.job.JobStatusChangedMsg;

                        /**
                         * Verifies a JobStatusChangedMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a JobStatusChangedMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns JobStatusChangedMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.job.JobStatusChangedMsg;

                        /**
                         * Creates a plain object from a JobStatusChangedMsg message. Also converts values to other types if specified.
                         * @param message JobStatusChangedMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.job.JobStatusChangedMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this JobStatusChangedMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a JobStatusMsg. */
                    interface IJobStatusMsg {

                        /** JobStatusMsg state */
                        state?: (at.spg.protobuf.artemis.job.JobStateE|null);

                        /** JobStatusMsg auditLog */
                        auditLog?: (at.spg.protobuf.artemis.job.IJobStatusChangedMsg[]|null);
                    }

                    /** Represents a JobStatusMsg. */
                    class JobStatusMsg implements IJobStatusMsg {

                        /**
                         * Constructs a new JobStatusMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.job.IJobStatusMsg);

                        /** JobStatusMsg state. */
                        public state: at.spg.protobuf.artemis.job.JobStateE;

                        /** JobStatusMsg auditLog. */
                        public auditLog: at.spg.protobuf.artemis.job.IJobStatusChangedMsg[];

                        /**
                         * Creates a new JobStatusMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns JobStatusMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.job.IJobStatusMsg): at.spg.protobuf.artemis.job.JobStatusMsg;

                        /**
                         * Encodes the specified JobStatusMsg message. Does not implicitly {@link at.spg.protobuf.artemis.job.JobStatusMsg.verify|verify} messages.
                         * @param message JobStatusMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.job.IJobStatusMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified JobStatusMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.job.JobStatusMsg.verify|verify} messages.
                         * @param message JobStatusMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.job.IJobStatusMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a JobStatusMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns JobStatusMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.job.JobStatusMsg;

                        /**
                         * Decodes a JobStatusMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns JobStatusMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.job.JobStatusMsg;

                        /**
                         * Verifies a JobStatusMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a JobStatusMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns JobStatusMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.job.JobStatusMsg;

                        /**
                         * Creates a plain object from a JobStatusMsg message. Also converts values to other types if specified.
                         * @param message JobStatusMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.job.JobStatusMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this JobStatusMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a JobMsg. */
                    interface IJobMsg {

                        /** JobMsg id */
                        id?: (string|null);

                        /** JobMsg audit */
                        audit?: (at.spg.protobuf.artemis.common.IAuditMsg|null);

                        /** JobMsg definition */
                        definition?: (at.spg.protobuf.artemis.job.IJobDefinitionMsg|null);

                        /** JobMsg info */
                        info?: (string|null);

                        /** JobMsg status */
                        status?: (at.spg.protobuf.artemis.job.IJobStatusMsg|null);

                        /** JobMsg jobName */
                        jobName?: (string|null);
                    }

                    /** Represents a JobMsg. */
                    class JobMsg implements IJobMsg {

                        /**
                         * Constructs a new JobMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.job.IJobMsg);

                        /** JobMsg id. */
                        public id: string;

                        /** JobMsg audit. */
                        public audit?: (at.spg.protobuf.artemis.common.IAuditMsg|null);

                        /** JobMsg definition. */
                        public definition?: (at.spg.protobuf.artemis.job.IJobDefinitionMsg|null);

                        /** JobMsg info. */
                        public info: string;

                        /** JobMsg status. */
                        public status?: (at.spg.protobuf.artemis.job.IJobStatusMsg|null);

                        /** JobMsg jobName. */
                        public jobName: string;

                        /**
                         * Creates a new JobMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns JobMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.job.IJobMsg): at.spg.protobuf.artemis.job.JobMsg;

                        /**
                         * Encodes the specified JobMsg message. Does not implicitly {@link at.spg.protobuf.artemis.job.JobMsg.verify|verify} messages.
                         * @param message JobMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.job.IJobMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified JobMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.job.JobMsg.verify|verify} messages.
                         * @param message JobMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.job.IJobMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a JobMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns JobMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.job.JobMsg;

                        /**
                         * Decodes a JobMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns JobMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.job.JobMsg;

                        /**
                         * Verifies a JobMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a JobMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns JobMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.job.JobMsg;

                        /**
                         * Creates a plain object from a JobMsg message. Also converts values to other types if specified.
                         * @param message JobMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.job.JobMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this JobMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a JobListMsg. */
                    interface IJobListMsg {

                        /** JobListMsg views */
                        views?: (at.spg.protobuf.artemis.job.JobListMsg.IJobListView[]|null);
                    }

                    /** Represents a JobListMsg. */
                    class JobListMsg implements IJobListMsg {

                        /**
                         * Constructs a new JobListMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.job.IJobListMsg);

                        /** JobListMsg views. */
                        public views: at.spg.protobuf.artemis.job.JobListMsg.IJobListView[];

                        /**
                         * Creates a new JobListMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns JobListMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.job.IJobListMsg): at.spg.protobuf.artemis.job.JobListMsg;

                        /**
                         * Encodes the specified JobListMsg message. Does not implicitly {@link at.spg.protobuf.artemis.job.JobListMsg.verify|verify} messages.
                         * @param message JobListMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.job.IJobListMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified JobListMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.job.JobListMsg.verify|verify} messages.
                         * @param message JobListMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.job.IJobListMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a JobListMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns JobListMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.job.JobListMsg;

                        /**
                         * Decodes a JobListMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns JobListMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.job.JobListMsg;

                        /**
                         * Verifies a JobListMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a JobListMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns JobListMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.job.JobListMsg;

                        /**
                         * Creates a plain object from a JobListMsg message. Also converts values to other types if specified.
                         * @param message JobListMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.job.JobListMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this JobListMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace JobListMsg {

                        /** Properties of a JobListView. */
                        interface IJobListView {

                            /** JobListView id */
                            id?: (string|null);

                            /** JobListView audit */
                            audit?: (at.spg.protobuf.artemis.common.IAuditMsg|null);

                            /** JobListView info */
                            info?: (string|null);

                            /** JobListView jobName */
                            jobName?: (string|null);

                            /** JobListView state */
                            state?: (at.spg.protobuf.artemis.job.JobStateE|null);
                        }

                        /** Represents a JobListView. */
                        class JobListView implements IJobListView {

                            /**
                             * Constructs a new JobListView.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: at.spg.protobuf.artemis.job.JobListMsg.IJobListView);

                            /** JobListView id. */
                            public id: string;

                            /** JobListView audit. */
                            public audit?: (at.spg.protobuf.artemis.common.IAuditMsg|null);

                            /** JobListView info. */
                            public info: string;

                            /** JobListView jobName. */
                            public jobName: string;

                            /** JobListView state. */
                            public state: at.spg.protobuf.artemis.job.JobStateE;

                            /**
                             * Creates a new JobListView instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns JobListView instance
                             */
                            public static create(properties?: at.spg.protobuf.artemis.job.JobListMsg.IJobListView): at.spg.protobuf.artemis.job.JobListMsg.JobListView;

                            /**
                             * Encodes the specified JobListView message. Does not implicitly {@link at.spg.protobuf.artemis.job.JobListMsg.JobListView.verify|verify} messages.
                             * @param message JobListView message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: at.spg.protobuf.artemis.job.JobListMsg.IJobListView, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified JobListView message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.job.JobListMsg.JobListView.verify|verify} messages.
                             * @param message JobListView message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: at.spg.protobuf.artemis.job.JobListMsg.IJobListView, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a JobListView message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns JobListView
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.job.JobListMsg.JobListView;

                            /**
                             * Decodes a JobListView message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns JobListView
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.job.JobListMsg.JobListView;

                            /**
                             * Verifies a JobListView message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a JobListView message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns JobListView
                             */
                            public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.job.JobListMsg.JobListView;

                            /**
                             * Creates a plain object from a JobListView message. Also converts values to other types if specified.
                             * @param message JobListView
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: at.spg.protobuf.artemis.job.JobListMsg.JobListView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this JobListView to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a LoadJobAsProcessReq. */
                    interface ILoadJobAsProcessReq {

                        /** LoadJobAsProcessReq job */
                        job?: (at.spg.protobuf.artemis.job.IJobMsg|null);

                        /** LoadJobAsProcessReq reverseFoil */
                        reverseFoil?: (boolean|null);
                    }

                    /** Represents a LoadJobAsProcessReq. */
                    class LoadJobAsProcessReq implements ILoadJobAsProcessReq {

                        /**
                         * Constructs a new LoadJobAsProcessReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.job.ILoadJobAsProcessReq);

                        /** LoadJobAsProcessReq job. */
                        public job?: (at.spg.protobuf.artemis.job.IJobMsg|null);

                        /** LoadJobAsProcessReq reverseFoil. */
                        public reverseFoil: boolean;

                        /**
                         * Creates a new LoadJobAsProcessReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LoadJobAsProcessReq instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.job.ILoadJobAsProcessReq): at.spg.protobuf.artemis.job.LoadJobAsProcessReq;

                        /**
                         * Encodes the specified LoadJobAsProcessReq message. Does not implicitly {@link at.spg.protobuf.artemis.job.LoadJobAsProcessReq.verify|verify} messages.
                         * @param message LoadJobAsProcessReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.job.ILoadJobAsProcessReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LoadJobAsProcessReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.job.LoadJobAsProcessReq.verify|verify} messages.
                         * @param message LoadJobAsProcessReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.job.ILoadJobAsProcessReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LoadJobAsProcessReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LoadJobAsProcessReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.job.LoadJobAsProcessReq;

                        /**
                         * Decodes a LoadJobAsProcessReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LoadJobAsProcessReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.job.LoadJobAsProcessReq;

                        /**
                         * Verifies a LoadJobAsProcessReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LoadJobAsProcessReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LoadJobAsProcessReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.job.LoadJobAsProcessReq;

                        /**
                         * Creates a plain object from a LoadJobAsProcessReq message. Also converts values to other types if specified.
                         * @param message LoadJobAsProcessReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.job.LoadJobAsProcessReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LoadJobAsProcessReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a LoadJobAsProcessRes. */
                    interface ILoadJobAsProcessRes {
                    }

                    /** Represents a LoadJobAsProcessRes. */
                    class LoadJobAsProcessRes implements ILoadJobAsProcessRes {

                        /**
                         * Constructs a new LoadJobAsProcessRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.job.ILoadJobAsProcessRes);

                        /**
                         * Creates a new LoadJobAsProcessRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LoadJobAsProcessRes instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.job.ILoadJobAsProcessRes): at.spg.protobuf.artemis.job.LoadJobAsProcessRes;

                        /**
                         * Encodes the specified LoadJobAsProcessRes message. Does not implicitly {@link at.spg.protobuf.artemis.job.LoadJobAsProcessRes.verify|verify} messages.
                         * @param message LoadJobAsProcessRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.job.ILoadJobAsProcessRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LoadJobAsProcessRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.job.LoadJobAsProcessRes.verify|verify} messages.
                         * @param message LoadJobAsProcessRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.job.ILoadJobAsProcessRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LoadJobAsProcessRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LoadJobAsProcessRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.job.LoadJobAsProcessRes;

                        /**
                         * Decodes a LoadJobAsProcessRes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LoadJobAsProcessRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.job.LoadJobAsProcessRes;

                        /**
                         * Verifies a LoadJobAsProcessRes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LoadJobAsProcessRes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LoadJobAsProcessRes
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.job.LoadJobAsProcessRes;

                        /**
                         * Creates a plain object from a LoadJobAsProcessRes message. Also converts values to other types if specified.
                         * @param message LoadJobAsProcessRes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.job.LoadJobAsProcessRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LoadJobAsProcessRes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace r2r. */
                namespace r2r {

                    /** Represents an ArtemisR2RService */
                    class ArtemisR2RService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new ArtemisR2RService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new ArtemisR2RService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ArtemisR2RService;

                        /**
                         * Calls GetStatus.
                         * @param request StatusReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and StatusRes
                         */
                        public getStatus(request: at.spg.protobuf.artemis.r2r.IStatusReq, callback: at.spg.protobuf.artemis.r2r.ArtemisR2RService.GetStatusCallback): void;

                        /**
                         * Calls GetStatus.
                         * @param request StatusReq message or plain object
                         * @returns Promise
                         */
                        public getStatus(request: at.spg.protobuf.artemis.r2r.IStatusReq): Promise<at.spg.protobuf.artemis.r2r.StatusRes>;

                        /**
                         * Calls Execute.
                         * @param request R2RAutoCommandReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and R2RAutoCommandRes
                         */
                        public execute(request: at.spg.protobuf.artemis.r2r.IR2RAutoCommandReq, callback: at.spg.protobuf.artemis.r2r.ArtemisR2RService.ExecuteCallback): void;

                        /**
                         * Calls Execute.
                         * @param request R2RAutoCommandReq message or plain object
                         * @returns Promise
                         */
                        public execute(request: at.spg.protobuf.artemis.r2r.IR2RAutoCommandReq): Promise<at.spg.protobuf.artemis.r2r.R2RAutoCommandRes>;

                        /**
                         * Calls RequestServoState.
                         * @param request ServoStateReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and ServoStateRes
                         */
                        public requestServoState(request: at.spg.protobuf.artemis.r2r.IServoStateReq, callback: at.spg.protobuf.artemis.r2r.ArtemisR2RService.RequestServoStateCallback): void;

                        /**
                         * Calls RequestServoState.
                         * @param request ServoStateReq message or plain object
                         * @returns Promise
                         */
                        public requestServoState(request: at.spg.protobuf.artemis.r2r.IServoStateReq): Promise<at.spg.protobuf.artemis.r2r.ServoStateRes>;

                        /**
                         * Calls GetServoStatus.
                         * @param request ServoStatusReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and ServoStatusMsg
                         */
                        public getServoStatus(request: at.spg.protobuf.artemis.r2r.IServoStatusReq, callback: at.spg.protobuf.artemis.r2r.ArtemisR2RService.GetServoStatusCallback): void;

                        /**
                         * Calls GetServoStatus.
                         * @param request ServoStatusReq message or plain object
                         * @returns Promise
                         */
                        public getServoStatus(request: at.spg.protobuf.artemis.r2r.IServoStatusReq): Promise<at.spg.protobuf.artemis.r2r.ServoStatusMsg>;
                    }

                    namespace ArtemisR2RService {

                        /**
                         * Callback as used by {@link at.spg.protobuf.artemis.r2r.ArtemisR2RService#getStatus}.
                         * @param error Error, if any
                         * @param [response] StatusRes
                         */
                        type GetStatusCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.r2r.StatusRes) => void;

                        /**
                         * Callback as used by {@link at.spg.protobuf.artemis.r2r.ArtemisR2RService#execute}.
                         * @param error Error, if any
                         * @param [response] R2RAutoCommandRes
                         */
                        type ExecuteCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.r2r.R2RAutoCommandRes) => void;

                        /**
                         * Callback as used by {@link at.spg.protobuf.artemis.r2r.ArtemisR2RService#requestServoState}.
                         * @param error Error, if any
                         * @param [response] ServoStateRes
                         */
                        type RequestServoStateCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.r2r.ServoStateRes) => void;

                        /**
                         * Callback as used by {@link at.spg.protobuf.artemis.r2r.ArtemisR2RService#getServoStatus}.
                         * @param error Error, if any
                         * @param [response] ServoStatusMsg
                         */
                        type GetServoStatusCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.r2r.ServoStatusMsg) => void;
                    }

                    /** Properties of a StatusReq. */
                    interface IStatusReq {
                    }

                    /**
                     * Route: at.spg.protobuf.artemis.r2r.Status
                     * Signature: Flux<StatusRes>(StatusReq)
                     */
                    class StatusReq implements IStatusReq {

                        /**
                         * Constructs a new StatusReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.r2r.IStatusReq);

                        /**
                         * Creates a new StatusReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StatusReq instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.r2r.IStatusReq): at.spg.protobuf.artemis.r2r.StatusReq;

                        /**
                         * Encodes the specified StatusReq message. Does not implicitly {@link at.spg.protobuf.artemis.r2r.StatusReq.verify|verify} messages.
                         * @param message StatusReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.r2r.IStatusReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StatusReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.r2r.StatusReq.verify|verify} messages.
                         * @param message StatusReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.r2r.IStatusReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StatusReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StatusReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.r2r.StatusReq;

                        /**
                         * Decodes a StatusReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StatusReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.r2r.StatusReq;

                        /**
                         * Verifies a StatusReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StatusReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StatusReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.r2r.StatusReq;

                        /**
                         * Creates a plain object from a StatusReq message. Also converts values to other types if specified.
                         * @param message StatusReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.r2r.StatusReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StatusReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a StatusRes. */
                    interface IStatusRes {

                        /** StatusRes statusDescription */
                        statusDescription?: (string|null);

                        /** StatusRes currentPosition */
                        currentPosition?: (number|null);
                    }

                    /** Represents a StatusRes. */
                    class StatusRes implements IStatusRes {

                        /**
                         * Constructs a new StatusRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.r2r.IStatusRes);

                        /** StatusRes statusDescription. */
                        public statusDescription: string;

                        /** StatusRes currentPosition. */
                        public currentPosition: number;

                        /**
                         * Creates a new StatusRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StatusRes instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.r2r.IStatusRes): at.spg.protobuf.artemis.r2r.StatusRes;

                        /**
                         * Encodes the specified StatusRes message. Does not implicitly {@link at.spg.protobuf.artemis.r2r.StatusRes.verify|verify} messages.
                         * @param message StatusRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.r2r.IStatusRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StatusRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.r2r.StatusRes.verify|verify} messages.
                         * @param message StatusRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.r2r.IStatusRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StatusRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StatusRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.r2r.StatusRes;

                        /**
                         * Decodes a StatusRes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StatusRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.r2r.StatusRes;

                        /**
                         * Verifies a StatusRes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StatusRes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StatusRes
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.r2r.StatusRes;

                        /**
                         * Creates a plain object from a StatusRes message. Also converts values to other types if specified.
                         * @param message StatusRes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.r2r.StatusRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StatusRes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a MoveDistance. */
                    interface IMoveDistance {

                        /** MoveDistance distance */
                        distance?: (number|null);

                        /** MoveDistance speed */
                        speed?: (number|null);

                        /** MoveDistance inPositionWindow */
                        inPositionWindow?: (number|null);

                        /** MoveDistance positionProportionalFactor */
                        positionProportionalFactor?: (number|null);
                    }

                    /** Represents a MoveDistance. */
                    class MoveDistance implements IMoveDistance {

                        /**
                         * Constructs a new MoveDistance.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.r2r.IMoveDistance);

                        /** MoveDistance distance. */
                        public distance: number;

                        /** MoveDistance speed. */
                        public speed: number;

                        /** MoveDistance inPositionWindow. */
                        public inPositionWindow: number;

                        /** MoveDistance positionProportionalFactor. */
                        public positionProportionalFactor: number;

                        /**
                         * Creates a new MoveDistance instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MoveDistance instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.r2r.IMoveDistance): at.spg.protobuf.artemis.r2r.MoveDistance;

                        /**
                         * Encodes the specified MoveDistance message. Does not implicitly {@link at.spg.protobuf.artemis.r2r.MoveDistance.verify|verify} messages.
                         * @param message MoveDistance message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.r2r.IMoveDistance, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MoveDistance message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.r2r.MoveDistance.verify|verify} messages.
                         * @param message MoveDistance message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.r2r.IMoveDistance, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MoveDistance message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MoveDistance
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.r2r.MoveDistance;

                        /**
                         * Decodes a MoveDistance message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MoveDistance
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.r2r.MoveDistance;

                        /**
                         * Verifies a MoveDistance message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MoveDistance message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MoveDistance
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.r2r.MoveDistance;

                        /**
                         * Creates a plain object from a MoveDistance message. Also converts values to other types if specified.
                         * @param message MoveDistance
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.r2r.MoveDistance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MoveDistance to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a R2RAutoCommandReq. */
                    interface IR2RAutoCommandReq {

                        /** R2RAutoCommandReq setupDevices */
                        setupDevices?: (boolean|null);

                        /** R2RAutoCommandReq createTension */
                        createTension?: (boolean|null);

                        /** R2RAutoCommandReq releaseTension */
                        releaseTension?: (boolean|null);

                        /** R2RAutoCommandReq moveDistance */
                        moveDistance?: (at.spg.protobuf.artemis.r2r.IMoveDistance|null);

                        /** R2RAutoCommandReq newPosition */
                        newPosition?: (number|null);

                        /** R2RAutoCommandReq cancelMove */
                        cancelMove?: (boolean|null);
                    }

                    /**
                     * Route: at.spg.protobuf.artemis.r2r.auto.cmd
                     * Signature: Mono<R2RAutoCommandRes>(R2RAutoCommandReq)
                     */
                    class R2RAutoCommandReq implements IR2RAutoCommandReq {

                        /**
                         * Constructs a new R2RAutoCommandReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.r2r.IR2RAutoCommandReq);

                        /** R2RAutoCommandReq setupDevices. */
                        public setupDevices?: (boolean|null);

                        /** R2RAutoCommandReq createTension. */
                        public createTension?: (boolean|null);

                        /** R2RAutoCommandReq releaseTension. */
                        public releaseTension?: (boolean|null);

                        /** R2RAutoCommandReq moveDistance. */
                        public moveDistance?: (at.spg.protobuf.artemis.r2r.IMoveDistance|null);

                        /** R2RAutoCommandReq newPosition. */
                        public newPosition?: (number|null);

                        /** R2RAutoCommandReq cancelMove. */
                        public cancelMove?: (boolean|null);

                        /** R2RAutoCommandReq cmd. */
                        public cmd?: ("setupDevices"|"createTension"|"releaseTension"|"moveDistance"|"newPosition"|"cancelMove");

                        /**
                         * Creates a new R2RAutoCommandReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns R2RAutoCommandReq instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.r2r.IR2RAutoCommandReq): at.spg.protobuf.artemis.r2r.R2RAutoCommandReq;

                        /**
                         * Encodes the specified R2RAutoCommandReq message. Does not implicitly {@link at.spg.protobuf.artemis.r2r.R2RAutoCommandReq.verify|verify} messages.
                         * @param message R2RAutoCommandReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.r2r.IR2RAutoCommandReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified R2RAutoCommandReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.r2r.R2RAutoCommandReq.verify|verify} messages.
                         * @param message R2RAutoCommandReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.r2r.IR2RAutoCommandReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a R2RAutoCommandReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns R2RAutoCommandReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.r2r.R2RAutoCommandReq;

                        /**
                         * Decodes a R2RAutoCommandReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns R2RAutoCommandReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.r2r.R2RAutoCommandReq;

                        /**
                         * Verifies a R2RAutoCommandReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a R2RAutoCommandReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns R2RAutoCommandReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.r2r.R2RAutoCommandReq;

                        /**
                         * Creates a plain object from a R2RAutoCommandReq message. Also converts values to other types if specified.
                         * @param message R2RAutoCommandReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.r2r.R2RAutoCommandReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this R2RAutoCommandReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a R2RAutoCommandRes. */
                    interface IR2RAutoCommandRes {

                        /** R2RAutoCommandRes ok */
                        ok?: (boolean|null);

                        /** R2RAutoCommandRes info */
                        info?: (string|null);
                    }

                    /** Represents a R2RAutoCommandRes. */
                    class R2RAutoCommandRes implements IR2RAutoCommandRes {

                        /**
                         * Constructs a new R2RAutoCommandRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.r2r.IR2RAutoCommandRes);

                        /** R2RAutoCommandRes ok. */
                        public ok: boolean;

                        /** R2RAutoCommandRes info. */
                        public info: string;

                        /**
                         * Creates a new R2RAutoCommandRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns R2RAutoCommandRes instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.r2r.IR2RAutoCommandRes): at.spg.protobuf.artemis.r2r.R2RAutoCommandRes;

                        /**
                         * Encodes the specified R2RAutoCommandRes message. Does not implicitly {@link at.spg.protobuf.artemis.r2r.R2RAutoCommandRes.verify|verify} messages.
                         * @param message R2RAutoCommandRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.r2r.IR2RAutoCommandRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified R2RAutoCommandRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.r2r.R2RAutoCommandRes.verify|verify} messages.
                         * @param message R2RAutoCommandRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.r2r.IR2RAutoCommandRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a R2RAutoCommandRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns R2RAutoCommandRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.r2r.R2RAutoCommandRes;

                        /**
                         * Decodes a R2RAutoCommandRes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns R2RAutoCommandRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.r2r.R2RAutoCommandRes;

                        /**
                         * Verifies a R2RAutoCommandRes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a R2RAutoCommandRes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns R2RAutoCommandRes
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.r2r.R2RAutoCommandRes;

                        /**
                         * Creates a plain object from a R2RAutoCommandRes message. Also converts values to other types if specified.
                         * @param message R2RAutoCommandRes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.r2r.R2RAutoCommandRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this R2RAutoCommandRes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** ServoStateE enum. */
                    enum ServoStateE {
                        SERVO_STATE_E_UNSPECIFIED = 0,
                        SERVO_STATE_E_INACTIVE = 1,
                        SERVO_STATE_E_INITIALISING = 2,
                        SERVO_STATE_E_READY = 3,
                        SERVO_STATE_E_ERROR = 4
                    }

                    /** ServoModeE enum. */
                    enum ServoModeE {
                        SERVO_MODE_E_UNSPECIFIED = 0,
                        SERVO_MODE_E_TARGET_VELOCITY = 1,
                        SERVO_MODE_E_TARGET_TORQUE = 2
                    }

                    /** Properties of a ServoStatusMsg. */
                    interface IServoStatusMsg {

                        /** ServoStatusMsg servoId */
                        servoId?: (string|null);

                        /** ServoStatusMsg state */
                        state?: (at.spg.protobuf.artemis.r2r.ServoStateE|null);

                        /** ServoStatusMsg mode */
                        mode?: (at.spg.protobuf.artemis.r2r.ServoModeE|null);

                        /** ServoStatusMsg actualVelocity */
                        actualVelocity?: (number|null);

                        /** ServoStatusMsg actualAcceleration */
                        actualAcceleration?: (number|null);

                        /** ServoStatusMsg warnings */
                        warnings?: (string[]|null);

                        /** ServoStatusMsg errors */
                        errors?: (string[]|null);
                    }

                    /** Represents a ServoStatusMsg. */
                    class ServoStatusMsg implements IServoStatusMsg {

                        /**
                         * Constructs a new ServoStatusMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.r2r.IServoStatusMsg);

                        /** ServoStatusMsg servoId. */
                        public servoId: string;

                        /** ServoStatusMsg state. */
                        public state: at.spg.protobuf.artemis.r2r.ServoStateE;

                        /** ServoStatusMsg mode. */
                        public mode: at.spg.protobuf.artemis.r2r.ServoModeE;

                        /** ServoStatusMsg actualVelocity. */
                        public actualVelocity: number;

                        /** ServoStatusMsg actualAcceleration. */
                        public actualAcceleration: number;

                        /** ServoStatusMsg warnings. */
                        public warnings: string[];

                        /** ServoStatusMsg errors. */
                        public errors: string[];

                        /**
                         * Creates a new ServoStatusMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ServoStatusMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.r2r.IServoStatusMsg): at.spg.protobuf.artemis.r2r.ServoStatusMsg;

                        /**
                         * Encodes the specified ServoStatusMsg message. Does not implicitly {@link at.spg.protobuf.artemis.r2r.ServoStatusMsg.verify|verify} messages.
                         * @param message ServoStatusMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.r2r.IServoStatusMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ServoStatusMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.r2r.ServoStatusMsg.verify|verify} messages.
                         * @param message ServoStatusMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.r2r.IServoStatusMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ServoStatusMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ServoStatusMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.r2r.ServoStatusMsg;

                        /**
                         * Decodes a ServoStatusMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ServoStatusMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.r2r.ServoStatusMsg;

                        /**
                         * Verifies a ServoStatusMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ServoStatusMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ServoStatusMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.r2r.ServoStatusMsg;

                        /**
                         * Creates a plain object from a ServoStatusMsg message. Also converts values to other types if specified.
                         * @param message ServoStatusMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.r2r.ServoStatusMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ServoStatusMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ServoStatusReq. */
                    interface IServoStatusReq {
                    }

                    /**
                     * Route: at.spg.protobuf.artemis.r2r.ServoStatusReq
                     * Signature: Flux<ServoStatusMsg>(ServoStatusReq)
                     */
                    class ServoStatusReq implements IServoStatusReq {

                        /**
                         * Constructs a new ServoStatusReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.r2r.IServoStatusReq);

                        /**
                         * Creates a new ServoStatusReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ServoStatusReq instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.r2r.IServoStatusReq): at.spg.protobuf.artemis.r2r.ServoStatusReq;

                        /**
                         * Encodes the specified ServoStatusReq message. Does not implicitly {@link at.spg.protobuf.artemis.r2r.ServoStatusReq.verify|verify} messages.
                         * @param message ServoStatusReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.r2r.IServoStatusReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ServoStatusReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.r2r.ServoStatusReq.verify|verify} messages.
                         * @param message ServoStatusReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.r2r.IServoStatusReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ServoStatusReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ServoStatusReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.r2r.ServoStatusReq;

                        /**
                         * Decodes a ServoStatusReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ServoStatusReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.r2r.ServoStatusReq;

                        /**
                         * Verifies a ServoStatusReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ServoStatusReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ServoStatusReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.r2r.ServoStatusReq;

                        /**
                         * Creates a plain object from a ServoStatusReq message. Also converts values to other types if specified.
                         * @param message ServoStatusReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.r2r.ServoStatusReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ServoStatusReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** ServoStateCommand enum. */
                    enum ServoStateCommand {
                        SERVO_STATE_COMMAND_UNDEFINED = 0,
                        SERVO_STATE_COMMAND_RESTART = 1,
                        SERVO_STATE_COMMAND_MOVE = 2,
                        SERVO_STATE_COMMAND_STOP = 3,
                        SERVO_STATE_COMMAND_DISABLE = 4
                    }

                    /** Properties of a ServoStateReq. */
                    interface IServoStateReq {

                        /** ServoStateReq servoId */
                        servoId?: (string|null);

                        /** ServoStateReq command */
                        command?: (at.spg.protobuf.artemis.r2r.ServoStateCommand|null);

                        /** ServoStateReq moveVelocity */
                        moveVelocity?: (number|null);

                        /** ServoStateReq acceleration */
                        acceleration?: (number|null);
                    }

                    /**
                     * Route: at.spg.protobuf.artemis.r2r.ServoStateReq
                     * Signature: Flux<ServoStateRes>(ServoStateReq)
                     */
                    class ServoStateReq implements IServoStateReq {

                        /**
                         * Constructs a new ServoStateReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.r2r.IServoStateReq);

                        /** ServoStateReq servoId. */
                        public servoId: string;

                        /** ServoStateReq command. */
                        public command: at.spg.protobuf.artemis.r2r.ServoStateCommand;

                        /** ServoStateReq moveVelocity. */
                        public moveVelocity: number;

                        /** ServoStateReq acceleration. */
                        public acceleration: number;

                        /**
                         * Creates a new ServoStateReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ServoStateReq instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.r2r.IServoStateReq): at.spg.protobuf.artemis.r2r.ServoStateReq;

                        /**
                         * Encodes the specified ServoStateReq message. Does not implicitly {@link at.spg.protobuf.artemis.r2r.ServoStateReq.verify|verify} messages.
                         * @param message ServoStateReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.r2r.IServoStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ServoStateReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.r2r.ServoStateReq.verify|verify} messages.
                         * @param message ServoStateReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.r2r.IServoStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ServoStateReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ServoStateReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.r2r.ServoStateReq;

                        /**
                         * Decodes a ServoStateReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ServoStateReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.r2r.ServoStateReq;

                        /**
                         * Verifies a ServoStateReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ServoStateReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ServoStateReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.r2r.ServoStateReq;

                        /**
                         * Creates a plain object from a ServoStateReq message. Also converts values to other types if specified.
                         * @param message ServoStateReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.r2r.ServoStateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ServoStateReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ServoStateRes. */
                    interface IServoStateRes {

                        /** ServoStateRes servoId */
                        servoId?: (string|null);

                        /** ServoStateRes response */
                        response?: (string|null);

                        /** ServoStateRes ok */
                        ok?: (boolean|null);
                    }

                    /** Represents a ServoStateRes. */
                    class ServoStateRes implements IServoStateRes {

                        /**
                         * Constructs a new ServoStateRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.r2r.IServoStateRes);

                        /** ServoStateRes servoId. */
                        public servoId: string;

                        /** ServoStateRes response. */
                        public response: string;

                        /** ServoStateRes ok. */
                        public ok: boolean;

                        /**
                         * Creates a new ServoStateRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ServoStateRes instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.r2r.IServoStateRes): at.spg.protobuf.artemis.r2r.ServoStateRes;

                        /**
                         * Encodes the specified ServoStateRes message. Does not implicitly {@link at.spg.protobuf.artemis.r2r.ServoStateRes.verify|verify} messages.
                         * @param message ServoStateRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.r2r.IServoStateRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ServoStateRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.r2r.ServoStateRes.verify|verify} messages.
                         * @param message ServoStateRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.r2r.IServoStateRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ServoStateRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ServoStateRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.r2r.ServoStateRes;

                        /**
                         * Decodes a ServoStateRes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ServoStateRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.r2r.ServoStateRes;

                        /**
                         * Verifies a ServoStateRes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ServoStateRes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ServoStateRes
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.r2r.ServoStateRes;

                        /**
                         * Creates a plain object from a ServoStateRes message. Also converts values to other types if specified.
                         * @param message ServoStateRes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.r2r.ServoStateRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ServoStateRes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace revpi. */
                namespace revpi {

                    /** LedColor enum. */
                    enum LedColor {
                        LED_COLOR_UNSPECIFIED = 0,
                        LED_COLOR_OFF = 1,
                        LED_COLOR_RED = 2,
                        LED_COLOR_ORANGE = 3,
                        LED_COLOR_GREEN = 4
                    }

                    /** Represents a RevPiConnectService */
                    class RevPiConnectService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new RevPiConnectService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new RevPiConnectService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): RevPiConnectService;

                        /**
                         * Calls SetLed.
                         * @param request LedReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and LedRes
                         */
                        public setLed(request: at.spg.protobuf.artemis.revpi.ILedReq, callback: at.spg.protobuf.artemis.revpi.RevPiConnectService.SetLedCallback): void;

                        /**
                         * Calls SetLed.
                         * @param request LedReq message or plain object
                         * @returns Promise
                         */
                        public setLed(request: at.spg.protobuf.artemis.revpi.ILedReq): Promise<at.spg.protobuf.artemis.revpi.LedRes>;

                        /**
                         * Calls SetSafetySwitch.
                         * @param request SafetySwitchReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and SafetySwitchRes
                         */
                        public setSafetySwitch(request: at.spg.protobuf.artemis.revpi.ISafetySwitchReq, callback: at.spg.protobuf.artemis.revpi.RevPiConnectService.SetSafetySwitchCallback): void;

                        /**
                         * Calls SetSafetySwitch.
                         * @param request SafetySwitchReq message or plain object
                         * @returns Promise
                         */
                        public setSafetySwitch(request: at.spg.protobuf.artemis.revpi.ISafetySwitchReq): Promise<at.spg.protobuf.artemis.revpi.SafetySwitchRes>;

                        /**
                         * Calls State.
                         * @param request RevPiStateReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and RevPiStateRes
                         */
                        public state(request: at.spg.protobuf.artemis.revpi.IRevPiStateReq, callback: at.spg.protobuf.artemis.revpi.RevPiConnectService.StateCallback): void;

                        /**
                         * Calls State.
                         * @param request RevPiStateReq message or plain object
                         * @returns Promise
                         */
                        public state(request: at.spg.protobuf.artemis.revpi.IRevPiStateReq): Promise<at.spg.protobuf.artemis.revpi.RevPiStateRes>;
                    }

                    namespace RevPiConnectService {

                        /**
                         * Callback as used by {@link at.spg.protobuf.artemis.revpi.RevPiConnectService#setLed}.
                         * @param error Error, if any
                         * @param [response] LedRes
                         */
                        type SetLedCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.revpi.LedRes) => void;

                        /**
                         * Callback as used by {@link at.spg.protobuf.artemis.revpi.RevPiConnectService#setSafetySwitch}.
                         * @param error Error, if any
                         * @param [response] SafetySwitchRes
                         */
                        type SetSafetySwitchCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.revpi.SafetySwitchRes) => void;

                        /**
                         * Callback as used by {@link at.spg.protobuf.artemis.revpi.RevPiConnectService#state}.
                         * @param error Error, if any
                         * @param [response] RevPiStateRes
                         */
                        type StateCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.revpi.RevPiStateRes) => void;
                    }

                    /** Properties of a LedReq. */
                    interface ILedReq {

                        /** LedReq ledOne */
                        ledOne?: (at.spg.protobuf.artemis.revpi.LedColor|null);

                        /** LedReq ledTwo */
                        ledTwo?: (at.spg.protobuf.artemis.revpi.LedColor|null);
                    }

                    /**
                     * Route: at.spg.protobuf.artemis.revpi.led
                     * Signature: Mono<LedRes>(LedReq)
                     */
                    class LedReq implements ILedReq {

                        /**
                         * Constructs a new LedReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.revpi.ILedReq);

                        /** LedReq ledOne. */
                        public ledOne: at.spg.protobuf.artemis.revpi.LedColor;

                        /** LedReq ledTwo. */
                        public ledTwo: at.spg.protobuf.artemis.revpi.LedColor;

                        /**
                         * Creates a new LedReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LedReq instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.revpi.ILedReq): at.spg.protobuf.artemis.revpi.LedReq;

                        /**
                         * Encodes the specified LedReq message. Does not implicitly {@link at.spg.protobuf.artemis.revpi.LedReq.verify|verify} messages.
                         * @param message LedReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.revpi.ILedReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LedReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.revpi.LedReq.verify|verify} messages.
                         * @param message LedReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.revpi.ILedReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LedReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LedReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.revpi.LedReq;

                        /**
                         * Decodes a LedReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LedReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.revpi.LedReq;

                        /**
                         * Verifies a LedReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LedReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LedReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.revpi.LedReq;

                        /**
                         * Creates a plain object from a LedReq message. Also converts values to other types if specified.
                         * @param message LedReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.revpi.LedReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LedReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a LedRes. */
                    interface ILedRes {
                    }

                    /** Represents a LedRes. */
                    class LedRes implements ILedRes {

                        /**
                         * Constructs a new LedRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.revpi.ILedRes);

                        /**
                         * Creates a new LedRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LedRes instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.revpi.ILedRes): at.spg.protobuf.artemis.revpi.LedRes;

                        /**
                         * Encodes the specified LedRes message. Does not implicitly {@link at.spg.protobuf.artemis.revpi.LedRes.verify|verify} messages.
                         * @param message LedRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.revpi.ILedRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LedRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.revpi.LedRes.verify|verify} messages.
                         * @param message LedRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.revpi.ILedRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LedRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LedRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.revpi.LedRes;

                        /**
                         * Decodes a LedRes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LedRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.revpi.LedRes;

                        /**
                         * Verifies a LedRes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LedRes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LedRes
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.revpi.LedRes;

                        /**
                         * Creates a plain object from a LedRes message. Also converts values to other types if specified.
                         * @param message LedRes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.revpi.LedRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LedRes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a SafetySwitchReq. */
                    interface ISafetySwitchReq {

                        /**
                         * Route: at.spg.protobuf.artemis.revpi.safetyswitch
                         * Signature: Mono<SafetySwitchRes>(SafetySwitchReq)
                         */
                        state?: (boolean|null);
                    }

                    /**
                     * Route: at.spg.protobuf.artemis.revpi.safetyswitch
                     * Signature: Mono<SafetySwitchRes>(SafetySwitchReq)
                     */
                    class SafetySwitchReq implements ISafetySwitchReq {

                        /**
                         * Constructs a new SafetySwitchReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.revpi.ISafetySwitchReq);

                        /**
                         * Route: at.spg.protobuf.artemis.revpi.safetyswitch
                         * Signature: Mono<SafetySwitchRes>(SafetySwitchReq)
                         */
                        public state: boolean;

                        /**
                         * Creates a new SafetySwitchReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SafetySwitchReq instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.revpi.ISafetySwitchReq): at.spg.protobuf.artemis.revpi.SafetySwitchReq;

                        /**
                         * Encodes the specified SafetySwitchReq message. Does not implicitly {@link at.spg.protobuf.artemis.revpi.SafetySwitchReq.verify|verify} messages.
                         * @param message SafetySwitchReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.revpi.ISafetySwitchReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SafetySwitchReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.revpi.SafetySwitchReq.verify|verify} messages.
                         * @param message SafetySwitchReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.revpi.ISafetySwitchReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SafetySwitchReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SafetySwitchReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.revpi.SafetySwitchReq;

                        /**
                         * Decodes a SafetySwitchReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SafetySwitchReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.revpi.SafetySwitchReq;

                        /**
                         * Verifies a SafetySwitchReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SafetySwitchReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SafetySwitchReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.revpi.SafetySwitchReq;

                        /**
                         * Creates a plain object from a SafetySwitchReq message. Also converts values to other types if specified.
                         * @param message SafetySwitchReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.revpi.SafetySwitchReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SafetySwitchReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a SafetySwitchRes. */
                    interface ISafetySwitchRes {
                    }

                    /** Represents a SafetySwitchRes. */
                    class SafetySwitchRes implements ISafetySwitchRes {

                        /**
                         * Constructs a new SafetySwitchRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.revpi.ISafetySwitchRes);

                        /**
                         * Creates a new SafetySwitchRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SafetySwitchRes instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.revpi.ISafetySwitchRes): at.spg.protobuf.artemis.revpi.SafetySwitchRes;

                        /**
                         * Encodes the specified SafetySwitchRes message. Does not implicitly {@link at.spg.protobuf.artemis.revpi.SafetySwitchRes.verify|verify} messages.
                         * @param message SafetySwitchRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.revpi.ISafetySwitchRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SafetySwitchRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.revpi.SafetySwitchRes.verify|verify} messages.
                         * @param message SafetySwitchRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.revpi.ISafetySwitchRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SafetySwitchRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SafetySwitchRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.revpi.SafetySwitchRes;

                        /**
                         * Decodes a SafetySwitchRes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SafetySwitchRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.revpi.SafetySwitchRes;

                        /**
                         * Verifies a SafetySwitchRes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SafetySwitchRes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SafetySwitchRes
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.revpi.SafetySwitchRes;

                        /**
                         * Creates a plain object from a SafetySwitchRes message. Also converts values to other types if specified.
                         * @param message SafetySwitchRes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.revpi.SafetySwitchRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SafetySwitchRes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a RevPiStateReq. */
                    interface IRevPiStateReq {

                        /**
                         * Route: at.spg.protobuf.artemis.revpi.state
                         * Signature: Flux<RevPiStateRes>(RevPiStateReq)
                         */
                        intervalInSeconds?: (number|null);
                    }

                    /**
                     * Route: at.spg.protobuf.artemis.revpi.state
                     * Signature: Flux<RevPiStateRes>(RevPiStateReq)
                     */
                    class RevPiStateReq implements IRevPiStateReq {

                        /**
                         * Constructs a new RevPiStateReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.revpi.IRevPiStateReq);

                        /**
                         * Route: at.spg.protobuf.artemis.revpi.state
                         * Signature: Flux<RevPiStateRes>(RevPiStateReq)
                         */
                        public intervalInSeconds: number;

                        /**
                         * Creates a new RevPiStateReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RevPiStateReq instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.revpi.IRevPiStateReq): at.spg.protobuf.artemis.revpi.RevPiStateReq;

                        /**
                         * Encodes the specified RevPiStateReq message. Does not implicitly {@link at.spg.protobuf.artemis.revpi.RevPiStateReq.verify|verify} messages.
                         * @param message RevPiStateReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.revpi.IRevPiStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RevPiStateReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.revpi.RevPiStateReq.verify|verify} messages.
                         * @param message RevPiStateReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.revpi.IRevPiStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RevPiStateReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RevPiStateReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.revpi.RevPiStateReq;

                        /**
                         * Decodes a RevPiStateReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RevPiStateReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.revpi.RevPiStateReq;

                        /**
                         * Verifies a RevPiStateReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RevPiStateReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RevPiStateReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.revpi.RevPiStateReq;

                        /**
                         * Creates a plain object from a RevPiStateReq message. Also converts values to other types if specified.
                         * @param message RevPiStateReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.revpi.RevPiStateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RevPiStateReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a RevPiStateRes. */
                    interface IRevPiStateRes {

                        /** RevPiStateRes ledOne */
                        ledOne?: (at.spg.protobuf.artemis.revpi.LedColor|null);

                        /** RevPiStateRes ledTwo */
                        ledTwo?: (at.spg.protobuf.artemis.revpi.LedColor|null);

                        /** RevPiStateRes safetySwitch */
                        safetySwitch?: (boolean|null);
                    }

                    /** Represents a RevPiStateRes. */
                    class RevPiStateRes implements IRevPiStateRes {

                        /**
                         * Constructs a new RevPiStateRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.revpi.IRevPiStateRes);

                        /** RevPiStateRes ledOne. */
                        public ledOne: at.spg.protobuf.artemis.revpi.LedColor;

                        /** RevPiStateRes ledTwo. */
                        public ledTwo: at.spg.protobuf.artemis.revpi.LedColor;

                        /** RevPiStateRes safetySwitch. */
                        public safetySwitch: boolean;

                        /**
                         * Creates a new RevPiStateRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RevPiStateRes instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.revpi.IRevPiStateRes): at.spg.protobuf.artemis.revpi.RevPiStateRes;

                        /**
                         * Encodes the specified RevPiStateRes message. Does not implicitly {@link at.spg.protobuf.artemis.revpi.RevPiStateRes.verify|verify} messages.
                         * @param message RevPiStateRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.revpi.IRevPiStateRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RevPiStateRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.revpi.RevPiStateRes.verify|verify} messages.
                         * @param message RevPiStateRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.revpi.IRevPiStateRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RevPiStateRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RevPiStateRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.revpi.RevPiStateRes;

                        /**
                         * Decodes a RevPiStateRes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RevPiStateRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.revpi.RevPiStateRes;

                        /**
                         * Verifies a RevPiStateRes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RevPiStateRes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RevPiStateRes
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.revpi.RevPiStateRes;

                        /**
                         * Creates a plain object from a RevPiStateRes message. Also converts values to other types if specified.
                         * @param message RevPiStateRes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.revpi.RevPiStateRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RevPiStateRes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace silverink. */
                namespace silverink {

                    /** Represents a ServiceDispenser */
                    class ServiceDispenser extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new ServiceDispenser service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new ServiceDispenser service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ServiceDispenser;

                        /**
                         * Calls SetGcode.
                         * @param request gcode message or plain object
                         * @param callback Node-style callback called with the error, if any, and SetGcodeReply
                         */
                        public setGcode(request: at.spg.protobuf.artemis.silverink.Igcode, callback: at.spg.protobuf.artemis.silverink.ServiceDispenser.SetGcodeCallback): void;

                        /**
                         * Calls SetGcode.
                         * @param request gcode message or plain object
                         * @returns Promise
                         */
                        public setGcode(request: at.spg.protobuf.artemis.silverink.Igcode): Promise<at.spg.protobuf.artemis.silverink.SetGcodeReply>;

                        /**
                         * Calls StartDispensing.
                         * @param request StartDispensingMessage message or plain object
                         * @param callback Node-style callback called with the error, if any, and FinishedDispensingMessage
                         */
                        public startDispensing(request: at.spg.protobuf.artemis.silverink.IStartDispensingMessage, callback: at.spg.protobuf.artemis.silverink.ServiceDispenser.StartDispensingCallback): void;

                        /**
                         * Calls StartDispensing.
                         * @param request StartDispensingMessage message or plain object
                         * @returns Promise
                         */
                        public startDispensing(request: at.spg.protobuf.artemis.silverink.IStartDispensingMessage): Promise<at.spg.protobuf.artemis.silverink.FinishedDispensingMessage>;

                        /**
                         * Calls RequestStatus.
                         * @param request RequestStatusMessage message or plain object
                         * @param callback Node-style callback called with the error, if any, and ResponseStatusMessage
                         */
                        public requestStatus(request: at.spg.protobuf.artemis.silverink.IRequestStatusMessage, callback: at.spg.protobuf.artemis.silverink.ServiceDispenser.RequestStatusCallback): void;

                        /**
                         * Calls RequestStatus.
                         * @param request RequestStatusMessage message or plain object
                         * @returns Promise
                         */
                        public requestStatus(request: at.spg.protobuf.artemis.silverink.IRequestStatusMessage): Promise<at.spg.protobuf.artemis.silverink.ResponseStatusMessage>;

                        /**
                         * Calls StopDispensing.
                         * @param request StopDispensingMessage message or plain object
                         * @param callback Node-style callback called with the error, if any, and StoppedDispensingMessage
                         */
                        public stopDispensing(request: at.spg.protobuf.artemis.silverink.IStopDispensingMessage, callback: at.spg.protobuf.artemis.silverink.ServiceDispenser.StopDispensingCallback): void;

                        /**
                         * Calls StopDispensing.
                         * @param request StopDispensingMessage message or plain object
                         * @returns Promise
                         */
                        public stopDispensing(request: at.spg.protobuf.artemis.silverink.IStopDispensingMessage): Promise<at.spg.protobuf.artemis.silverink.StoppedDispensingMessage>;

                        /**
                         * Calls RequestReference.
                         * @param request RequestReferenceMessage message or plain object
                         * @param callback Node-style callback called with the error, if any, and ResponseReferenceMessage
                         */
                        public requestReference(request: at.spg.protobuf.artemis.silverink.IRequestReferenceMessage, callback: at.spg.protobuf.artemis.silverink.ServiceDispenser.RequestReferenceCallback): void;

                        /**
                         * Calls RequestReference.
                         * @param request RequestReferenceMessage message or plain object
                         * @returns Promise
                         */
                        public requestReference(request: at.spg.protobuf.artemis.silverink.IRequestReferenceMessage): Promise<at.spg.protobuf.artemis.silverink.ResponseReferenceMessage>;
                    }

                    namespace ServiceDispenser {

                        /**
                         * Callback as used by {@link at.spg.protobuf.artemis.silverink.ServiceDispenser#setGcode}.
                         * @param error Error, if any
                         * @param [response] SetGcodeReply
                         */
                        type SetGcodeCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.silverink.SetGcodeReply) => void;

                        /**
                         * Callback as used by {@link at.spg.protobuf.artemis.silverink.ServiceDispenser#startDispensing}.
                         * @param error Error, if any
                         * @param [response] FinishedDispensingMessage
                         */
                        type StartDispensingCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.silverink.FinishedDispensingMessage) => void;

                        /**
                         * Callback as used by {@link at.spg.protobuf.artemis.silverink.ServiceDispenser#requestStatus}.
                         * @param error Error, if any
                         * @param [response] ResponseStatusMessage
                         */
                        type RequestStatusCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.silverink.ResponseStatusMessage) => void;

                        /**
                         * Callback as used by {@link at.spg.protobuf.artemis.silverink.ServiceDispenser#stopDispensing}.
                         * @param error Error, if any
                         * @param [response] StoppedDispensingMessage
                         */
                        type StopDispensingCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.silverink.StoppedDispensingMessage) => void;

                        /**
                         * Callback as used by {@link at.spg.protobuf.artemis.silverink.ServiceDispenser#requestReference}.
                         * @param error Error, if any
                         * @param [response] ResponseReferenceMessage
                         */
                        type RequestReferenceCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.silverink.ResponseReferenceMessage) => void;
                    }

                    /** Properties of a gcode. */
                    interface Igcode {

                        /** gcode line */
                        line?: (at.spg.protobuf.artemis.silverink.Igcode_line[]|null);
                    }

                    /** Represents a gcode. */
                    class gcode implements Igcode {

                        /**
                         * Constructs a new gcode.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.silverink.Igcode);

                        /** gcode line. */
                        public line: at.spg.protobuf.artemis.silverink.Igcode_line[];

                        /**
                         * Creates a new gcode instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns gcode instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.silverink.Igcode): at.spg.protobuf.artemis.silverink.gcode;

                        /**
                         * Encodes the specified gcode message. Does not implicitly {@link at.spg.protobuf.artemis.silverink.gcode.verify|verify} messages.
                         * @param message gcode message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.silverink.Igcode, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified gcode message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.silverink.gcode.verify|verify} messages.
                         * @param message gcode message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.silverink.Igcode, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a gcode message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns gcode
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.silverink.gcode;

                        /**
                         * Decodes a gcode message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns gcode
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.silverink.gcode;

                        /**
                         * Verifies a gcode message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a gcode message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns gcode
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.silverink.gcode;

                        /**
                         * Creates a plain object from a gcode message. Also converts values to other types if specified.
                         * @param message gcode
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.silverink.gcode, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this gcode to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a gcode_line. */
                    interface Igcode_line {

                        /** gcode_line id */
                        id?: (at.spg.protobuf.artemis.silverink.gcode_line.Gcode|null);

                        /** gcode_line x1 */
                        x1?: (number|null);

                        /** gcode_line y1 */
                        y1?: (number|null);

                        /** gcode_line z1 */
                        z1?: (number|null);

                        /** gcode_line x2 */
                        x2?: (number|null);

                        /** gcode_line y2 */
                        y2?: (number|null);

                        /** gcode_line z2 */
                        z2?: (number|null);

                        /** gcode_line A */
                        A?: (number|null);

                        /** gcode_line B */
                        B?: (number|null);

                        /** gcode_line F */
                        F?: (number|null);

                        /** gcode_line T */
                        T?: (number|null);

                        /** gcode_line pattern */
                        pattern?: (string|null);

                        /** gcode_line fiducial */
                        fiducial?: (string|null);

                        /** gcode_line data */
                        data?: (number[]|null);
                    }

                    /** Represents a gcode_line. */
                    class gcode_line implements Igcode_line {

                        /**
                         * Constructs a new gcode_line.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.silverink.Igcode_line);

                        /** gcode_line id. */
                        public id: at.spg.protobuf.artemis.silverink.gcode_line.Gcode;

                        /** gcode_line x1. */
                        public x1?: (number|null);

                        /** gcode_line y1. */
                        public y1?: (number|null);

                        /** gcode_line z1. */
                        public z1?: (number|null);

                        /** gcode_line x2. */
                        public x2?: (number|null);

                        /** gcode_line y2. */
                        public y2?: (number|null);

                        /** gcode_line z2. */
                        public z2?: (number|null);

                        /** gcode_line A. */
                        public A?: (number|null);

                        /** gcode_line B. */
                        public B?: (number|null);

                        /** gcode_line F. */
                        public F?: (number|null);

                        /** gcode_line T. */
                        public T?: (number|null);

                        /** gcode_line pattern. */
                        public pattern?: (string|null);

                        /** gcode_line fiducial. */
                        public fiducial?: (string|null);

                        /** gcode_line data. */
                        public data: number[];

                        /** gcode_line _x1. */
                        public _x1?: "x1";

                        /** gcode_line _y1. */
                        public _y1?: "y1";

                        /** gcode_line _z1. */
                        public _z1?: "z1";

                        /** gcode_line _x2. */
                        public _x2?: "x2";

                        /** gcode_line _y2. */
                        public _y2?: "y2";

                        /** gcode_line _z2. */
                        public _z2?: "z2";

                        /** gcode_line _A. */
                        public _A?: "A";

                        /** gcode_line _B. */
                        public _B?: "B";

                        /** gcode_line _F. */
                        public _F?: "F";

                        /** gcode_line _T. */
                        public _T?: "T";

                        /** gcode_line _pattern. */
                        public _pattern?: "pattern";

                        /** gcode_line _fiducial. */
                        public _fiducial?: "fiducial";

                        /**
                         * Creates a new gcode_line instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns gcode_line instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.silverink.Igcode_line): at.spg.protobuf.artemis.silverink.gcode_line;

                        /**
                         * Encodes the specified gcode_line message. Does not implicitly {@link at.spg.protobuf.artemis.silverink.gcode_line.verify|verify} messages.
                         * @param message gcode_line message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.silverink.Igcode_line, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified gcode_line message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.silverink.gcode_line.verify|verify} messages.
                         * @param message gcode_line message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.silverink.Igcode_line, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a gcode_line message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns gcode_line
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.silverink.gcode_line;

                        /**
                         * Decodes a gcode_line message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns gcode_line
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.silverink.gcode_line;

                        /**
                         * Verifies a gcode_line message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a gcode_line message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns gcode_line
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.silverink.gcode_line;

                        /**
                         * Creates a plain object from a gcode_line message. Also converts values to other types if specified.
                         * @param message gcode_line
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.silverink.gcode_line, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this gcode_line to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace gcode_line {

                        /** Gcode enum. */
                        enum Gcode {
                            err = 0,
                            G01 = 1,
                            G30 = 14,
                            M30 = 2,
                            M300 = 3,
                            M301 = 4,
                            M302 = 5,
                            M303 = 6,
                            M54 = 7,
                            M55 = 8,
                            M56 = 9,
                            M57 = 10,
                            M58 = 11,
                            G00 = 12,
                            M06 = 13,
                            M200 = 15
                        }
                    }

                    /** Properties of a SetGcodeReply. */
                    interface ISetGcodeReply {

                        /** SetGcodeReply accepted */
                        accepted?: (boolean|null);

                        /** SetGcodeReply error */
                        error?: (string|null);
                    }

                    /** Represents a SetGcodeReply. */
                    class SetGcodeReply implements ISetGcodeReply {

                        /**
                         * Constructs a new SetGcodeReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.silverink.ISetGcodeReply);

                        /** SetGcodeReply accepted. */
                        public accepted: boolean;

                        /** SetGcodeReply error. */
                        public error?: (string|null);

                        /** SetGcodeReply _error. */
                        public _error?: "error";

                        /**
                         * Creates a new SetGcodeReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SetGcodeReply instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.silverink.ISetGcodeReply): at.spg.protobuf.artemis.silverink.SetGcodeReply;

                        /**
                         * Encodes the specified SetGcodeReply message. Does not implicitly {@link at.spg.protobuf.artemis.silverink.SetGcodeReply.verify|verify} messages.
                         * @param message SetGcodeReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.silverink.ISetGcodeReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SetGcodeReply message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.silverink.SetGcodeReply.verify|verify} messages.
                         * @param message SetGcodeReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.silverink.ISetGcodeReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SetGcodeReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SetGcodeReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.silverink.SetGcodeReply;

                        /**
                         * Decodes a SetGcodeReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SetGcodeReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.silverink.SetGcodeReply;

                        /**
                         * Verifies a SetGcodeReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SetGcodeReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SetGcodeReply
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.silverink.SetGcodeReply;

                        /**
                         * Creates a plain object from a SetGcodeReply message. Also converts values to other types if specified.
                         * @param message SetGcodeReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.silverink.SetGcodeReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SetGcodeReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a StartDispensingMessage. */
                    interface IStartDispensingMessage {

                        /** StartDispensingMessage message */
                        message?: (string|null);
                    }

                    /** Represents a StartDispensingMessage. */
                    class StartDispensingMessage implements IStartDispensingMessage {

                        /**
                         * Constructs a new StartDispensingMessage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.silverink.IStartDispensingMessage);

                        /** StartDispensingMessage message. */
                        public message?: (string|null);

                        /** StartDispensingMessage _message. */
                        public _message?: "message";

                        /**
                         * Creates a new StartDispensingMessage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StartDispensingMessage instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.silverink.IStartDispensingMessage): at.spg.protobuf.artemis.silverink.StartDispensingMessage;

                        /**
                         * Encodes the specified StartDispensingMessage message. Does not implicitly {@link at.spg.protobuf.artemis.silverink.StartDispensingMessage.verify|verify} messages.
                         * @param message StartDispensingMessage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.silverink.IStartDispensingMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StartDispensingMessage message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.silverink.StartDispensingMessage.verify|verify} messages.
                         * @param message StartDispensingMessage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.silverink.IStartDispensingMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StartDispensingMessage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StartDispensingMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.silverink.StartDispensingMessage;

                        /**
                         * Decodes a StartDispensingMessage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StartDispensingMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.silverink.StartDispensingMessage;

                        /**
                         * Verifies a StartDispensingMessage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StartDispensingMessage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StartDispensingMessage
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.silverink.StartDispensingMessage;

                        /**
                         * Creates a plain object from a StartDispensingMessage message. Also converts values to other types if specified.
                         * @param message StartDispensingMessage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.silverink.StartDispensingMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StartDispensingMessage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a FinishedDispensingMessage. */
                    interface IFinishedDispensingMessage {

                        /** FinishedDispensingMessage success */
                        success?: (boolean|null);

                        /** FinishedDispensingMessage error */
                        error?: (string|null);
                    }

                    /** Represents a FinishedDispensingMessage. */
                    class FinishedDispensingMessage implements IFinishedDispensingMessage {

                        /**
                         * Constructs a new FinishedDispensingMessage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.silverink.IFinishedDispensingMessage);

                        /** FinishedDispensingMessage success. */
                        public success: boolean;

                        /** FinishedDispensingMessage error. */
                        public error?: (string|null);

                        /** FinishedDispensingMessage _error. */
                        public _error?: "error";

                        /**
                         * Creates a new FinishedDispensingMessage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FinishedDispensingMessage instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.silverink.IFinishedDispensingMessage): at.spg.protobuf.artemis.silverink.FinishedDispensingMessage;

                        /**
                         * Encodes the specified FinishedDispensingMessage message. Does not implicitly {@link at.spg.protobuf.artemis.silverink.FinishedDispensingMessage.verify|verify} messages.
                         * @param message FinishedDispensingMessage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.silverink.IFinishedDispensingMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FinishedDispensingMessage message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.silverink.FinishedDispensingMessage.verify|verify} messages.
                         * @param message FinishedDispensingMessage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.silverink.IFinishedDispensingMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FinishedDispensingMessage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FinishedDispensingMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.silverink.FinishedDispensingMessage;

                        /**
                         * Decodes a FinishedDispensingMessage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FinishedDispensingMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.silverink.FinishedDispensingMessage;

                        /**
                         * Verifies a FinishedDispensingMessage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FinishedDispensingMessage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FinishedDispensingMessage
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.silverink.FinishedDispensingMessage;

                        /**
                         * Creates a plain object from a FinishedDispensingMessage message. Also converts values to other types if specified.
                         * @param message FinishedDispensingMessage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.silverink.FinishedDispensingMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FinishedDispensingMessage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Urgency enum. */
                    enum Urgency {
                        RightNow = 0,
                        AfterThisLine = 1,
                        AfterThisProcess = 2
                    }

                    /** Properties of a StopDispensingMessage. */
                    interface IStopDispensingMessage {

                        /** StopDispensingMessage urgency */
                        urgency?: (at.spg.protobuf.artemis.silverink.Urgency|null);
                    }

                    /** Represents a StopDispensingMessage. */
                    class StopDispensingMessage implements IStopDispensingMessage {

                        /**
                         * Constructs a new StopDispensingMessage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.silverink.IStopDispensingMessage);

                        /** StopDispensingMessage urgency. */
                        public urgency: at.spg.protobuf.artemis.silverink.Urgency;

                        /**
                         * Creates a new StopDispensingMessage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StopDispensingMessage instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.silverink.IStopDispensingMessage): at.spg.protobuf.artemis.silverink.StopDispensingMessage;

                        /**
                         * Encodes the specified StopDispensingMessage message. Does not implicitly {@link at.spg.protobuf.artemis.silverink.StopDispensingMessage.verify|verify} messages.
                         * @param message StopDispensingMessage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.silverink.IStopDispensingMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StopDispensingMessage message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.silverink.StopDispensingMessage.verify|verify} messages.
                         * @param message StopDispensingMessage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.silverink.IStopDispensingMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StopDispensingMessage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StopDispensingMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.silverink.StopDispensingMessage;

                        /**
                         * Decodes a StopDispensingMessage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StopDispensingMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.silverink.StopDispensingMessage;

                        /**
                         * Verifies a StopDispensingMessage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StopDispensingMessage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StopDispensingMessage
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.silverink.StopDispensingMessage;

                        /**
                         * Creates a plain object from a StopDispensingMessage message. Also converts values to other types if specified.
                         * @param message StopDispensingMessage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.silverink.StopDispensingMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StopDispensingMessage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a StoppedDispensingMessage. */
                    interface IStoppedDispensingMessage {

                        /** StoppedDispensingMessage message */
                        message?: (string|null);
                    }

                    /** Represents a StoppedDispensingMessage. */
                    class StoppedDispensingMessage implements IStoppedDispensingMessage {

                        /**
                         * Constructs a new StoppedDispensingMessage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.silverink.IStoppedDispensingMessage);

                        /** StoppedDispensingMessage message. */
                        public message: string;

                        /**
                         * Creates a new StoppedDispensingMessage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StoppedDispensingMessage instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.silverink.IStoppedDispensingMessage): at.spg.protobuf.artemis.silverink.StoppedDispensingMessage;

                        /**
                         * Encodes the specified StoppedDispensingMessage message. Does not implicitly {@link at.spg.protobuf.artemis.silverink.StoppedDispensingMessage.verify|verify} messages.
                         * @param message StoppedDispensingMessage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.silverink.IStoppedDispensingMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StoppedDispensingMessage message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.silverink.StoppedDispensingMessage.verify|verify} messages.
                         * @param message StoppedDispensingMessage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.silverink.IStoppedDispensingMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StoppedDispensingMessage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StoppedDispensingMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.silverink.StoppedDispensingMessage;

                        /**
                         * Decodes a StoppedDispensingMessage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StoppedDispensingMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.silverink.StoppedDispensingMessage;

                        /**
                         * Verifies a StoppedDispensingMessage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StoppedDispensingMessage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StoppedDispensingMessage
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.silverink.StoppedDispensingMessage;

                        /**
                         * Creates a plain object from a StoppedDispensingMessage message. Also converts values to other types if specified.
                         * @param message StoppedDispensingMessage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.silverink.StoppedDispensingMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StoppedDispensingMessage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** MachineDetail enum. */
                    enum MachineDetail {
                        pos = 0,
                        line = 1,
                        axis = 2,
                        vermes = 3
                    }

                    /** Properties of a RequestStatusMessage. */
                    interface IRequestStatusMessage {

                        /** RequestStatusMessage detail */
                        detail?: (at.spg.protobuf.artemis.silverink.MachineDetail[]|null);
                    }

                    /** Represents a RequestStatusMessage. */
                    class RequestStatusMessage implements IRequestStatusMessage {

                        /**
                         * Constructs a new RequestStatusMessage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.silverink.IRequestStatusMessage);

                        /** RequestStatusMessage detail. */
                        public detail: at.spg.protobuf.artemis.silverink.MachineDetail[];

                        /**
                         * Creates a new RequestStatusMessage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RequestStatusMessage instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.silverink.IRequestStatusMessage): at.spg.protobuf.artemis.silverink.RequestStatusMessage;

                        /**
                         * Encodes the specified RequestStatusMessage message. Does not implicitly {@link at.spg.protobuf.artemis.silverink.RequestStatusMessage.verify|verify} messages.
                         * @param message RequestStatusMessage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.silverink.IRequestStatusMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RequestStatusMessage message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.silverink.RequestStatusMessage.verify|verify} messages.
                         * @param message RequestStatusMessage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.silverink.IRequestStatusMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RequestStatusMessage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RequestStatusMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.silverink.RequestStatusMessage;

                        /**
                         * Decodes a RequestStatusMessage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RequestStatusMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.silverink.RequestStatusMessage;

                        /**
                         * Verifies a RequestStatusMessage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RequestStatusMessage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RequestStatusMessage
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.silverink.RequestStatusMessage;

                        /**
                         * Creates a plain object from a RequestStatusMessage message. Also converts values to other types if specified.
                         * @param message RequestStatusMessage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.silverink.RequestStatusMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RequestStatusMessage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ResponseStatusMessage. */
                    interface IResponseStatusMessage {

                        /** ResponseStatusMessage detailstatus */
                        detailstatus?: (at.spg.protobuf.artemis.silverink.IPartResponse[]|null);
                    }

                    /** Represents a ResponseStatusMessage. */
                    class ResponseStatusMessage implements IResponseStatusMessage {

                        /**
                         * Constructs a new ResponseStatusMessage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.silverink.IResponseStatusMessage);

                        /** ResponseStatusMessage detailstatus. */
                        public detailstatus: at.spg.protobuf.artemis.silverink.IPartResponse[];

                        /**
                         * Creates a new ResponseStatusMessage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResponseStatusMessage instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.silverink.IResponseStatusMessage): at.spg.protobuf.artemis.silverink.ResponseStatusMessage;

                        /**
                         * Encodes the specified ResponseStatusMessage message. Does not implicitly {@link at.spg.protobuf.artemis.silverink.ResponseStatusMessage.verify|verify} messages.
                         * @param message ResponseStatusMessage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.silverink.IResponseStatusMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResponseStatusMessage message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.silverink.ResponseStatusMessage.verify|verify} messages.
                         * @param message ResponseStatusMessage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.silverink.IResponseStatusMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResponseStatusMessage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResponseStatusMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.silverink.ResponseStatusMessage;

                        /**
                         * Decodes a ResponseStatusMessage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResponseStatusMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.silverink.ResponseStatusMessage;

                        /**
                         * Verifies a ResponseStatusMessage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResponseStatusMessage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResponseStatusMessage
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.silverink.ResponseStatusMessage;

                        /**
                         * Creates a plain object from a ResponseStatusMessage message. Also converts values to other types if specified.
                         * @param message ResponseStatusMessage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.silverink.ResponseStatusMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResponseStatusMessage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a PartResponse. */
                    interface IPartResponse {

                        /** PartResponse detail */
                        detail?: (at.spg.protobuf.artemis.silverink.MachineDetail|null);

                        /** PartResponse status */
                        status?: (string|null);
                    }

                    /** Represents a PartResponse. */
                    class PartResponse implements IPartResponse {

                        /**
                         * Constructs a new PartResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.silverink.IPartResponse);

                        /** PartResponse detail. */
                        public detail: at.spg.protobuf.artemis.silverink.MachineDetail;

                        /** PartResponse status. */
                        public status: string;

                        /**
                         * Creates a new PartResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PartResponse instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.silverink.IPartResponse): at.spg.protobuf.artemis.silverink.PartResponse;

                        /**
                         * Encodes the specified PartResponse message. Does not implicitly {@link at.spg.protobuf.artemis.silverink.PartResponse.verify|verify} messages.
                         * @param message PartResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.silverink.IPartResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PartResponse message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.silverink.PartResponse.verify|verify} messages.
                         * @param message PartResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.silverink.IPartResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PartResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PartResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.silverink.PartResponse;

                        /**
                         * Decodes a PartResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PartResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.silverink.PartResponse;

                        /**
                         * Verifies a PartResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PartResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PartResponse
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.silverink.PartResponse;

                        /**
                         * Creates a plain object from a PartResponse message. Also converts values to other types if specified.
                         * @param message PartResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.silverink.PartResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PartResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Represents a Status */
                    class Status extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new Status service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new Status service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Status;

                        /**
                         * Calls GetStatus.
                         * @param request StatusRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and StatusReply
                         */
                        public getStatus(request: at.spg.protobuf.artemis.silverink.IStatusRequest, callback: at.spg.protobuf.artemis.silverink.Status.GetStatusCallback): void;

                        /**
                         * Calls GetStatus.
                         * @param request StatusRequest message or plain object
                         * @returns Promise
                         */
                        public getStatus(request: at.spg.protobuf.artemis.silverink.IStatusRequest): Promise<at.spg.protobuf.artemis.silverink.StatusReply>;
                    }

                    namespace Status {

                        /**
                         * Callback as used by {@link at.spg.protobuf.artemis.silverink.Status#getStatus}.
                         * @param error Error, if any
                         * @param [response] StatusReply
                         */
                        type GetStatusCallback = (error: (Error|null), response?: at.spg.protobuf.artemis.silverink.StatusReply) => void;
                    }

                    /** Properties of a StatusRequest. */
                    interface IStatusRequest {

                        /** StatusRequest name */
                        name?: (string|null);
                    }

                    /** Represents a StatusRequest. */
                    class StatusRequest implements IStatusRequest {

                        /**
                         * Constructs a new StatusRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.silverink.IStatusRequest);

                        /** StatusRequest name. */
                        public name: string;

                        /**
                         * Creates a new StatusRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StatusRequest instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.silverink.IStatusRequest): at.spg.protobuf.artemis.silverink.StatusRequest;

                        /**
                         * Encodes the specified StatusRequest message. Does not implicitly {@link at.spg.protobuf.artemis.silverink.StatusRequest.verify|verify} messages.
                         * @param message StatusRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.silverink.IStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StatusRequest message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.silverink.StatusRequest.verify|verify} messages.
                         * @param message StatusRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.silverink.IStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StatusRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StatusRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.silverink.StatusRequest;

                        /**
                         * Decodes a StatusRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StatusRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.silverink.StatusRequest;

                        /**
                         * Verifies a StatusRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StatusRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StatusRequest
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.silverink.StatusRequest;

                        /**
                         * Creates a plain object from a StatusRequest message. Also converts values to other types if specified.
                         * @param message StatusRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.silverink.StatusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StatusRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a StatusReply. */
                    interface IStatusReply {

                        /** StatusReply message */
                        message?: (string|null);
                    }

                    /** Represents a StatusReply. */
                    class StatusReply implements IStatusReply {

                        /**
                         * Constructs a new StatusReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.silverink.IStatusReply);

                        /** StatusReply message. */
                        public message: string;

                        /**
                         * Creates a new StatusReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StatusReply instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.silverink.IStatusReply): at.spg.protobuf.artemis.silverink.StatusReply;

                        /**
                         * Encodes the specified StatusReply message. Does not implicitly {@link at.spg.protobuf.artemis.silverink.StatusReply.verify|verify} messages.
                         * @param message StatusReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.silverink.IStatusReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StatusReply message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.silverink.StatusReply.verify|verify} messages.
                         * @param message StatusReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.silverink.IStatusReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StatusReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StatusReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.silverink.StatusReply;

                        /**
                         * Decodes a StatusReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StatusReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.silverink.StatusReply;

                        /**
                         * Verifies a StatusReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StatusReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StatusReply
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.silverink.StatusReply;

                        /**
                         * Creates a plain object from a StatusReply message. Also converts values to other types if specified.
                         * @param message StatusReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.silverink.StatusReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StatusReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a RequestReferenceMessage. */
                    interface IRequestReferenceMessage {

                        /** RequestReferenceMessage message */
                        message?: (string|null);
                    }

                    /** Represents a RequestReferenceMessage. */
                    class RequestReferenceMessage implements IRequestReferenceMessage {

                        /**
                         * Constructs a new RequestReferenceMessage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.silverink.IRequestReferenceMessage);

                        /** RequestReferenceMessage message. */
                        public message?: (string|null);

                        /** RequestReferenceMessage _message. */
                        public _message?: "message";

                        /**
                         * Creates a new RequestReferenceMessage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RequestReferenceMessage instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.silverink.IRequestReferenceMessage): at.spg.protobuf.artemis.silverink.RequestReferenceMessage;

                        /**
                         * Encodes the specified RequestReferenceMessage message. Does not implicitly {@link at.spg.protobuf.artemis.silverink.RequestReferenceMessage.verify|verify} messages.
                         * @param message RequestReferenceMessage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.silverink.IRequestReferenceMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RequestReferenceMessage message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.silverink.RequestReferenceMessage.verify|verify} messages.
                         * @param message RequestReferenceMessage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.silverink.IRequestReferenceMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RequestReferenceMessage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RequestReferenceMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.silverink.RequestReferenceMessage;

                        /**
                         * Decodes a RequestReferenceMessage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RequestReferenceMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.silverink.RequestReferenceMessage;

                        /**
                         * Verifies a RequestReferenceMessage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RequestReferenceMessage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RequestReferenceMessage
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.silverink.RequestReferenceMessage;

                        /**
                         * Creates a plain object from a RequestReferenceMessage message. Also converts values to other types if specified.
                         * @param message RequestReferenceMessage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.silverink.RequestReferenceMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RequestReferenceMessage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ResponseReferenceMessage. */
                    interface IResponseReferenceMessage {

                        /** ResponseReferenceMessage success */
                        success?: (boolean|null);

                        /** ResponseReferenceMessage error */
                        error?: (string|null);
                    }

                    /** Represents a ResponseReferenceMessage. */
                    class ResponseReferenceMessage implements IResponseReferenceMessage {

                        /**
                         * Constructs a new ResponseReferenceMessage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.silverink.IResponseReferenceMessage);

                        /** ResponseReferenceMessage success. */
                        public success: boolean;

                        /** ResponseReferenceMessage error. */
                        public error?: (string|null);

                        /** ResponseReferenceMessage _error. */
                        public _error?: "error";

                        /**
                         * Creates a new ResponseReferenceMessage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResponseReferenceMessage instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.silverink.IResponseReferenceMessage): at.spg.protobuf.artemis.silverink.ResponseReferenceMessage;

                        /**
                         * Encodes the specified ResponseReferenceMessage message. Does not implicitly {@link at.spg.protobuf.artemis.silverink.ResponseReferenceMessage.verify|verify} messages.
                         * @param message ResponseReferenceMessage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.silverink.IResponseReferenceMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResponseReferenceMessage message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.silverink.ResponseReferenceMessage.verify|verify} messages.
                         * @param message ResponseReferenceMessage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.silverink.IResponseReferenceMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResponseReferenceMessage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResponseReferenceMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.silverink.ResponseReferenceMessage;

                        /**
                         * Decodes a ResponseReferenceMessage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResponseReferenceMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.silverink.ResponseReferenceMessage;

                        /**
                         * Verifies a ResponseReferenceMessage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResponseReferenceMessage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResponseReferenceMessage
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.silverink.ResponseReferenceMessage;

                        /**
                         * Creates a plain object from a ResponseReferenceMessage message. Also converts values to other types if specified.
                         * @param message ResponseReferenceMessage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.silverink.ResponseReferenceMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResponseReferenceMessage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace state. */
                namespace state {

                    /** Properties of an ArtemisState. */
                    interface IArtemisState {

                        /** ArtemisState uvCuring */
                        uvCuring?: (at.spg.protobuf.artemis.uvcuring.IUvCuringContext|null);
                    }

                    /**
                     * Request-Stream interaction at topic:
                     * 'at.spg.protobuf.artemis.state'
                     */
                    class ArtemisState implements IArtemisState {

                        /**
                         * Constructs a new ArtemisState.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.state.IArtemisState);

                        /** ArtemisState uvCuring. */
                        public uvCuring?: (at.spg.protobuf.artemis.uvcuring.IUvCuringContext|null);

                        /**
                         * Creates a new ArtemisState instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ArtemisState instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.state.IArtemisState): at.spg.protobuf.artemis.state.ArtemisState;

                        /**
                         * Encodes the specified ArtemisState message. Does not implicitly {@link at.spg.protobuf.artemis.state.ArtemisState.verify|verify} messages.
                         * @param message ArtemisState message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.state.IArtemisState, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ArtemisState message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.state.ArtemisState.verify|verify} messages.
                         * @param message ArtemisState message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.state.IArtemisState, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ArtemisState message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ArtemisState
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.state.ArtemisState;

                        /**
                         * Decodes an ArtemisState message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ArtemisState
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.state.ArtemisState;

                        /**
                         * Verifies an ArtemisState message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ArtemisState message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ArtemisState
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.state.ArtemisState;

                        /**
                         * Creates a plain object from an ArtemisState message. Also converts values to other types if specified.
                         * @param message ArtemisState
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.state.ArtemisState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ArtemisState to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace uvcuring. */
                namespace uvcuring {

                    /** UvState enum. */
                    enum UvState {
                        Undefined = 0,
                        Init = 1,
                        WaitingForConnection = 2,
                        Connected = 3,
                        Ready = 4,
                        StartCuring = 5,
                        Curing = 6,
                        StopCuring = 7,
                        Failed = 8,
                        End = 9
                    }

                    /** Properties of an UvCuringContext. */
                    interface IUvCuringContext {

                        /** UvCuringContext state */
                        state?: (at.spg.protobuf.artemis.uvcuring.UvState|null);

                        /** UvCuringContext power */
                        power?: (number|null);

                        /** UvCuringContext stripeCurrent */
                        stripeCurrent?: (number[]|null);

                        /** UvCuringContext stripeTemp */
                        stripeTemp?: (number[]|null);

                        /** UvCuringContext pwmStatus */
                        pwmStatus?: (number|null);
                    }

                    /** Represents an UvCuringContext. */
                    class UvCuringContext implements IUvCuringContext {

                        /**
                         * Constructs a new UvCuringContext.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.uvcuring.IUvCuringContext);

                        /** UvCuringContext state. */
                        public state: at.spg.protobuf.artemis.uvcuring.UvState;

                        /** UvCuringContext power. */
                        public power: number;

                        /** UvCuringContext stripeCurrent. */
                        public stripeCurrent: number[];

                        /** UvCuringContext stripeTemp. */
                        public stripeTemp: number[];

                        /** UvCuringContext pwmStatus. */
                        public pwmStatus: number;

                        /**
                         * Creates a new UvCuringContext instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UvCuringContext instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.uvcuring.IUvCuringContext): at.spg.protobuf.artemis.uvcuring.UvCuringContext;

                        /**
                         * Encodes the specified UvCuringContext message. Does not implicitly {@link at.spg.protobuf.artemis.uvcuring.UvCuringContext.verify|verify} messages.
                         * @param message UvCuringContext message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.uvcuring.IUvCuringContext, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UvCuringContext message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.uvcuring.UvCuringContext.verify|verify} messages.
                         * @param message UvCuringContext message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.uvcuring.IUvCuringContext, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UvCuringContext message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UvCuringContext
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.uvcuring.UvCuringContext;

                        /**
                         * Decodes an UvCuringContext message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UvCuringContext
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.uvcuring.UvCuringContext;

                        /**
                         * Verifies an UvCuringContext message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UvCuringContext message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UvCuringContext
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.uvcuring.UvCuringContext;

                        /**
                         * Creates a plain object from an UvCuringContext message. Also converts values to other types if specified.
                         * @param message UvCuringContext
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.uvcuring.UvCuringContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UvCuringContext to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CuringReq. */
                    interface ICuringReq {

                        /** CuringReq power */
                        power?: (number|null);

                        /** CuringReq timeSeconds */
                        timeSeconds?: (number|null);

                        /** CuringReq targetBatch */
                        targetBatch?: (string|null);
                    }

                    /** Represents a CuringReq. */
                    class CuringReq implements ICuringReq {

                        /**
                         * Constructs a new CuringReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.uvcuring.ICuringReq);

                        /** CuringReq power. */
                        public power: number;

                        /** CuringReq timeSeconds. */
                        public timeSeconds: number;

                        /** CuringReq targetBatch. */
                        public targetBatch: string;

                        /**
                         * Creates a new CuringReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CuringReq instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.uvcuring.ICuringReq): at.spg.protobuf.artemis.uvcuring.CuringReq;

                        /**
                         * Encodes the specified CuringReq message. Does not implicitly {@link at.spg.protobuf.artemis.uvcuring.CuringReq.verify|verify} messages.
                         * @param message CuringReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.uvcuring.ICuringReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CuringReq message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.uvcuring.CuringReq.verify|verify} messages.
                         * @param message CuringReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.uvcuring.ICuringReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CuringReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CuringReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.uvcuring.CuringReq;

                        /**
                         * Decodes a CuringReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CuringReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.uvcuring.CuringReq;

                        /**
                         * Verifies a CuringReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CuringReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CuringReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.uvcuring.CuringReq;

                        /**
                         * Creates a plain object from a CuringReq message. Also converts values to other types if specified.
                         * @param message CuringReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.uvcuring.CuringReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CuringReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CuringRes. */
                    interface ICuringRes {
                    }

                    /** Represents a CuringRes. */
                    class CuringRes implements ICuringRes {

                        /**
                         * Constructs a new CuringRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.uvcuring.ICuringRes);

                        /**
                         * Creates a new CuringRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CuringRes instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.uvcuring.ICuringRes): at.spg.protobuf.artemis.uvcuring.CuringRes;

                        /**
                         * Encodes the specified CuringRes message. Does not implicitly {@link at.spg.protobuf.artemis.uvcuring.CuringRes.verify|verify} messages.
                         * @param message CuringRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.uvcuring.ICuringRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CuringRes message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.uvcuring.CuringRes.verify|verify} messages.
                         * @param message CuringRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.uvcuring.ICuringRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CuringRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CuringRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.uvcuring.CuringRes;

                        /**
                         * Decodes a CuringRes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CuringRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.uvcuring.CuringRes;

                        /**
                         * Verifies a CuringRes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CuringRes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CuringRes
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.uvcuring.CuringRes;

                        /**
                         * Creates a plain object from a CuringRes message. Also converts values to other types if specified.
                         * @param message CuringRes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.uvcuring.CuringRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CuringRes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace ui. */
                namespace ui {

                    /** Properties of an UiGrpcRequest. */
                    interface IUiGrpcRequest {

                        /** UiGrpcRequest methodName */
                        methodName?: (string|null);

                        /** UiGrpcRequest parameter */
                        parameter?: (google.protobuf.IAny|null);
                    }

                    /** Represents an UiGrpcRequest. */
                    class UiGrpcRequest implements IUiGrpcRequest {

                        /**
                         * Constructs a new UiGrpcRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.artemis.ui.IUiGrpcRequest);

                        /** UiGrpcRequest methodName. */
                        public methodName: string;

                        /** UiGrpcRequest parameter. */
                        public parameter?: (google.protobuf.IAny|null);

                        /** UiGrpcRequest _parameter. */
                        public _parameter?: "parameter";

                        /**
                         * Creates a new UiGrpcRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UiGrpcRequest instance
                         */
                        public static create(properties?: at.spg.protobuf.artemis.ui.IUiGrpcRequest): at.spg.protobuf.artemis.ui.UiGrpcRequest;

                        /**
                         * Encodes the specified UiGrpcRequest message. Does not implicitly {@link at.spg.protobuf.artemis.ui.UiGrpcRequest.verify|verify} messages.
                         * @param message UiGrpcRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.artemis.ui.IUiGrpcRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UiGrpcRequest message, length delimited. Does not implicitly {@link at.spg.protobuf.artemis.ui.UiGrpcRequest.verify|verify} messages.
                         * @param message UiGrpcRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.artemis.ui.IUiGrpcRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UiGrpcRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UiGrpcRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.artemis.ui.UiGrpcRequest;

                        /**
                         * Decodes an UiGrpcRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UiGrpcRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.artemis.ui.UiGrpcRequest;

                        /**
                         * Verifies an UiGrpcRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UiGrpcRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UiGrpcRequest
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.artemis.ui.UiGrpcRequest;

                        /**
                         * Creates a plain object from an UiGrpcRequest message. Also converts values to other types if specified.
                         * @param message UiGrpcRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.artemis.ui.UiGrpcRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UiGrpcRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Namespace scribingdb. */
            namespace scribingdb {

                /** Namespace batchfile. */
                namespace batchfile {

                    /** Properties of a VertexMsg. */
                    interface IVertexMsg {

                        /** VertexMsg x */
                        x?: (number|null);

                        /** VertexMsg y */
                        y?: (number|null);
                    }

                    /** Represents a VertexMsg. */
                    class VertexMsg implements IVertexMsg {

                        /**
                         * Constructs a new VertexMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.batchfile.IVertexMsg);

                        /** VertexMsg x. */
                        public x: number;

                        /** VertexMsg y. */
                        public y: number;

                        /**
                         * Creates a new VertexMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VertexMsg instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.batchfile.IVertexMsg): at.spg.protobuf.scribingdb.batchfile.VertexMsg;

                        /**
                         * Encodes the specified VertexMsg message. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.VertexMsg.verify|verify} messages.
                         * @param message VertexMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.batchfile.IVertexMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VertexMsg message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.VertexMsg.verify|verify} messages.
                         * @param message VertexMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.batchfile.IVertexMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VertexMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VertexMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.batchfile.VertexMsg;

                        /**
                         * Decodes a VertexMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VertexMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.batchfile.VertexMsg;

                        /**
                         * Verifies a VertexMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VertexMsg message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VertexMsg
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.batchfile.VertexMsg;

                        /**
                         * Creates a plain object from a VertexMsg message. Also converts values to other types if specified.
                         * @param message VertexMsg
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.batchfile.VertexMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VertexMsg to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** ScribingType enum. */
                    enum ScribingType {
                        SCRIBING_TYPE_UNSPECIFIED = 0,
                        SCRIBING_TYPE_LASER = 1,
                        SCRIBING_TYPE_DIELECTRIC = 2,
                        SCRIBING_TYPE_SILVERINK = 3,
                        SCRIBING_TYPE_FIDUCIAL = 4,
                        SCRIBING_TYPE_CONDUCTIVE_STRIPE = 5,
                        SCRIBING_TYPE_LASER_TEXT = 6
                    }

                    /** Properties of an EditorInfo. */
                    interface IEditorInfo {

                        /** EditorInfo id */
                        id?: (string|null);

                        /** EditorInfo parentId */
                        parentId?: (string|null);

                        /** EditorInfo color */
                        color?: (string|null);

                        /** EditorInfo width */
                        width?: (number|null);

                        /** EditorInfo fillColor */
                        fillColor?: (string|null);

                        /** EditorInfo label */
                        label?: (string|null);
                    }

                    /** Represents an EditorInfo. */
                    class EditorInfo implements IEditorInfo {

                        /**
                         * Constructs a new EditorInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.batchfile.IEditorInfo);

                        /** EditorInfo id. */
                        public id: string;

                        /** EditorInfo parentId. */
                        public parentId: string;

                        /** EditorInfo color. */
                        public color: string;

                        /** EditorInfo width. */
                        public width: number;

                        /** EditorInfo fillColor. */
                        public fillColor: string;

                        /** EditorInfo label. */
                        public label: string;

                        /**
                         * Creates a new EditorInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EditorInfo instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.batchfile.IEditorInfo): at.spg.protobuf.scribingdb.batchfile.EditorInfo;

                        /**
                         * Encodes the specified EditorInfo message. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.EditorInfo.verify|verify} messages.
                         * @param message EditorInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.batchfile.IEditorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EditorInfo message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.EditorInfo.verify|verify} messages.
                         * @param message EditorInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.batchfile.IEditorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EditorInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EditorInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.batchfile.EditorInfo;

                        /**
                         * Decodes an EditorInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EditorInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.batchfile.EditorInfo;

                        /**
                         * Verifies an EditorInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EditorInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EditorInfo
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.batchfile.EditorInfo;

                        /**
                         * Creates a plain object from an EditorInfo message. Also converts values to other types if specified.
                         * @param message EditorInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.batchfile.EditorInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EditorInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ScribingText. */
                    interface IScribingText {

                        /** ScribingText value */
                        value?: (string|null);
                    }

                    /** Represents a ScribingText. */
                    class ScribingText implements IScribingText {

                        /**
                         * Constructs a new ScribingText.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.batchfile.IScribingText);

                        /** ScribingText value. */
                        public value: string;

                        /**
                         * Creates a new ScribingText instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ScribingText instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.batchfile.IScribingText): at.spg.protobuf.scribingdb.batchfile.ScribingText;

                        /**
                         * Encodes the specified ScribingText message. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.ScribingText.verify|verify} messages.
                         * @param message ScribingText message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.batchfile.IScribingText, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ScribingText message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.ScribingText.verify|verify} messages.
                         * @param message ScribingText message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.batchfile.IScribingText, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ScribingText message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ScribingText
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.batchfile.ScribingText;

                        /**
                         * Decodes a ScribingText message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ScribingText
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.batchfile.ScribingText;

                        /**
                         * Verifies a ScribingText message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ScribingText message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ScribingText
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.batchfile.ScribingText;

                        /**
                         * Creates a plain object from a ScribingText message. Also converts values to other types if specified.
                         * @param message ScribingText
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.batchfile.ScribingText, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ScribingText to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ScribingSettings. */
                    interface IScribingSettings {

                        /** ScribingSettings type */
                        type?: (number|null);

                        /** ScribingSettings timeSeconds */
                        timeSeconds?: (number|null);

                        /** ScribingSettings stripeWidth */
                        stripeWidth?: (number|null);
                    }

                    /** Represents a ScribingSettings. */
                    class ScribingSettings implements IScribingSettings {

                        /**
                         * Constructs a new ScribingSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.batchfile.IScribingSettings);

                        /** ScribingSettings type. */
                        public type: number;

                        /** ScribingSettings timeSeconds. */
                        public timeSeconds: number;

                        /** ScribingSettings stripeWidth. */
                        public stripeWidth: number;

                        /**
                         * Creates a new ScribingSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ScribingSettings instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.batchfile.IScribingSettings): at.spg.protobuf.scribingdb.batchfile.ScribingSettings;

                        /**
                         * Encodes the specified ScribingSettings message. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.ScribingSettings.verify|verify} messages.
                         * @param message ScribingSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.batchfile.IScribingSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ScribingSettings message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.ScribingSettings.verify|verify} messages.
                         * @param message ScribingSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.batchfile.IScribingSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ScribingSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ScribingSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.batchfile.ScribingSettings;

                        /**
                         * Decodes a ScribingSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ScribingSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.batchfile.ScribingSettings;

                        /**
                         * Verifies a ScribingSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ScribingSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ScribingSettings
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.batchfile.ScribingSettings;

                        /**
                         * Creates a plain object from a ScribingSettings message. Also converts values to other types if specified.
                         * @param message ScribingSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.batchfile.ScribingSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ScribingSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ScribingObject. */
                    interface IScribingObject {

                        /** ScribingObject type */
                        type?: (at.spg.protobuf.scribingdb.batchfile.ScribingType|null);

                        /** ScribingObject settings */
                        settings?: (at.spg.protobuf.scribingdb.batchfile.IScribingSettings|null);

                        /** ScribingObject vertices */
                        vertices?: (at.spg.protobuf.scribingdb.batchfile.IVertexMsg[]|null);

                        /** ScribingObject editorInfo */
                        editorInfo?: (at.spg.protobuf.scribingdb.batchfile.IEditorInfo|null);

                        /** ScribingObject text */
                        text?: (at.spg.protobuf.scribingdb.batchfile.IScribingText|null);

                        /** ScribingObject layer */
                        layer?: (string|null);
                    }

                    /** Represents a ScribingObject. */
                    class ScribingObject implements IScribingObject {

                        /**
                         * Constructs a new ScribingObject.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.batchfile.IScribingObject);

                        /** ScribingObject type. */
                        public type: at.spg.protobuf.scribingdb.batchfile.ScribingType;

                        /** ScribingObject settings. */
                        public settings?: (at.spg.protobuf.scribingdb.batchfile.IScribingSettings|null);

                        /** ScribingObject vertices. */
                        public vertices: at.spg.protobuf.scribingdb.batchfile.IVertexMsg[];

                        /** ScribingObject editorInfo. */
                        public editorInfo?: (at.spg.protobuf.scribingdb.batchfile.IEditorInfo|null);

                        /** ScribingObject text. */
                        public text?: (at.spg.protobuf.scribingdb.batchfile.IScribingText|null);

                        /** ScribingObject layer. */
                        public layer: string;

                        /**
                         * Creates a new ScribingObject instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ScribingObject instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.batchfile.IScribingObject): at.spg.protobuf.scribingdb.batchfile.ScribingObject;

                        /**
                         * Encodes the specified ScribingObject message. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.ScribingObject.verify|verify} messages.
                         * @param message ScribingObject message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.batchfile.IScribingObject, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ScribingObject message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.ScribingObject.verify|verify} messages.
                         * @param message ScribingObject message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.batchfile.IScribingObject, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ScribingObject message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ScribingObject
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.batchfile.ScribingObject;

                        /**
                         * Decodes a ScribingObject message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ScribingObject
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.batchfile.ScribingObject;

                        /**
                         * Verifies a ScribingObject message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ScribingObject message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ScribingObject
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.batchfile.ScribingObject;

                        /**
                         * Creates a plain object from a ScribingObject message. Also converts values to other types if specified.
                         * @param message ScribingObject
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.batchfile.ScribingObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ScribingObject to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** ModifierType enum. */
                    enum ModifierType {
                        MODIFIER_TYPE_UNSPECIFIED = 0,
                        MODIFIER_TYPE_GROUP = 1,
                        MODIFIER_TYPE_MULTIPLIER = 2
                    }

                    /** Properties of a ModifierObject. */
                    interface IModifierObject {

                        /** ModifierObject type */
                        type?: (at.spg.protobuf.scribingdb.batchfile.ModifierType|null);

                        /** ModifierObject translation */
                        translation?: (at.spg.protobuf.scribingdb.batchfile.IVertexMsg|null);

                        /** ModifierObject rotation */
                        rotation?: (number|null);

                        /** ModifierObject editorInfo */
                        editorInfo?: (at.spg.protobuf.scribingdb.batchfile.IEditorInfo|null);

                        /** ModifierObject n */
                        n?: (number|null);
                    }

                    /** Represents a ModifierObject. */
                    class ModifierObject implements IModifierObject {

                        /**
                         * Constructs a new ModifierObject.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.batchfile.IModifierObject);

                        /** ModifierObject type. */
                        public type: at.spg.protobuf.scribingdb.batchfile.ModifierType;

                        /** ModifierObject translation. */
                        public translation?: (at.spg.protobuf.scribingdb.batchfile.IVertexMsg|null);

                        /** ModifierObject rotation. */
                        public rotation: number;

                        /** ModifierObject editorInfo. */
                        public editorInfo?: (at.spg.protobuf.scribingdb.batchfile.IEditorInfo|null);

                        /** ModifierObject n. */
                        public n: number;

                        /**
                         * Creates a new ModifierObject instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ModifierObject instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.batchfile.IModifierObject): at.spg.protobuf.scribingdb.batchfile.ModifierObject;

                        /**
                         * Encodes the specified ModifierObject message. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.ModifierObject.verify|verify} messages.
                         * @param message ModifierObject message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.batchfile.IModifierObject, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ModifierObject message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.ModifierObject.verify|verify} messages.
                         * @param message ModifierObject message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.batchfile.IModifierObject, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ModifierObject message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ModifierObject
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.batchfile.ModifierObject;

                        /**
                         * Decodes a ModifierObject message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ModifierObject
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.batchfile.ModifierObject;

                        /**
                         * Verifies a ModifierObject message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ModifierObject message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ModifierObject
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.batchfile.ModifierObject;

                        /**
                         * Creates a plain object from a ModifierObject message. Also converts values to other types if specified.
                         * @param message ModifierObject
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.batchfile.ModifierObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ModifierObject to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** MetaType enum. */
                    enum MetaType {
                        META_TYPE_UNSPECIFIED = 0,
                        META_TYPE_SOLAR_MODULE = 1
                    }

                    /** Properties of a MetaObject. */
                    interface IMetaObject {

                        /** MetaObject type */
                        type?: (at.spg.protobuf.scribingdb.batchfile.MetaType|null);

                        /** MetaObject vertices */
                        vertices?: (at.spg.protobuf.scribingdb.batchfile.IVertexMsg[]|null);

                        /** MetaObject label */
                        label?: (string|null);

                        /** MetaObject editorInfo */
                        editorInfo?: (at.spg.protobuf.scribingdb.batchfile.IEditorInfo|null);

                        /** MetaObject serializationLevel */
                        serializationLevel?: (number|null);

                        /** MetaObject parallelizationLevel */
                        parallelizationLevel?: (number|null);

                        /** MetaObject probingPointPositive */
                        probingPointPositive?: (at.spg.protobuf.scribingdb.batchfile.IVertexMsg|null);

                        /** MetaObject probingPointNegative */
                        probingPointNegative?: (at.spg.protobuf.scribingdb.batchfile.IVertexMsg|null);

                        /** MetaObject layer */
                        layer?: (string|null);
                    }

                    /** Represents a MetaObject. */
                    class MetaObject implements IMetaObject {

                        /**
                         * Constructs a new MetaObject.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.batchfile.IMetaObject);

                        /** MetaObject type. */
                        public type: at.spg.protobuf.scribingdb.batchfile.MetaType;

                        /** MetaObject vertices. */
                        public vertices: at.spg.protobuf.scribingdb.batchfile.IVertexMsg[];

                        /** MetaObject label. */
                        public label: string;

                        /** MetaObject editorInfo. */
                        public editorInfo?: (at.spg.protobuf.scribingdb.batchfile.IEditorInfo|null);

                        /** MetaObject serializationLevel. */
                        public serializationLevel: number;

                        /** MetaObject parallelizationLevel. */
                        public parallelizationLevel: number;

                        /** MetaObject probingPointPositive. */
                        public probingPointPositive?: (at.spg.protobuf.scribingdb.batchfile.IVertexMsg|null);

                        /** MetaObject probingPointNegative. */
                        public probingPointNegative?: (at.spg.protobuf.scribingdb.batchfile.IVertexMsg|null);

                        /** MetaObject layer. */
                        public layer: string;

                        /**
                         * Creates a new MetaObject instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MetaObject instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.batchfile.IMetaObject): at.spg.protobuf.scribingdb.batchfile.MetaObject;

                        /**
                         * Encodes the specified MetaObject message. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.MetaObject.verify|verify} messages.
                         * @param message MetaObject message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.batchfile.IMetaObject, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MetaObject message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.MetaObject.verify|verify} messages.
                         * @param message MetaObject message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.batchfile.IMetaObject, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MetaObject message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MetaObject
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.batchfile.MetaObject;

                        /**
                         * Decodes a MetaObject message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MetaObject
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.batchfile.MetaObject;

                        /**
                         * Verifies a MetaObject message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MetaObject message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MetaObject
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.batchfile.MetaObject;

                        /**
                         * Creates a plain object from a MetaObject message. Also converts values to other types if specified.
                         * @param message MetaObject
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.batchfile.MetaObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MetaObject to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Layer. */
                    interface ILayer {

                        /** Layer label */
                        label?: (string|null);
                    }

                    /** Represents a Layer. */
                    class Layer implements ILayer {

                        /**
                         * Constructs a new Layer.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.batchfile.ILayer);

                        /** Layer label. */
                        public label: string;

                        /**
                         * Creates a new Layer instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Layer instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.batchfile.ILayer): at.spg.protobuf.scribingdb.batchfile.Layer;

                        /**
                         * Encodes the specified Layer message. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.Layer.verify|verify} messages.
                         * @param message Layer message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.batchfile.ILayer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Layer message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.Layer.verify|verify} messages.
                         * @param message Layer message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.batchfile.ILayer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Layer message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Layer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.batchfile.Layer;

                        /**
                         * Decodes a Layer message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Layer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.batchfile.Layer;

                        /**
                         * Verifies a Layer message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Layer message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Layer
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.batchfile.Layer;

                        /**
                         * Creates a plain object from a Layer message. Also converts values to other types if specified.
                         * @param message Layer
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.batchfile.Layer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Layer to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a BatchDataFile. */
                    interface IBatchDataFile {

                        /** BatchDataFile version */
                        version?: (number|null);

                        /** BatchDataFile script */
                        script?: (string|null);

                        /** BatchDataFile scribingObjects */
                        scribingObjects?: (at.spg.protobuf.scribingdb.batchfile.IScribingObject[]|null);

                        /** BatchDataFile modifierObjects */
                        modifierObjects?: (at.spg.protobuf.scribingdb.batchfile.IModifierObject[]|null);

                        /** BatchDataFile metaObjects */
                        metaObjects?: (at.spg.protobuf.scribingdb.batchfile.IMetaObject[]|null);
                    }

                    /** Represents a BatchDataFile. */
                    class BatchDataFile implements IBatchDataFile {

                        /**
                         * Constructs a new BatchDataFile.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.batchfile.IBatchDataFile);

                        /** BatchDataFile version. */
                        public version: number;

                        /** BatchDataFile script. */
                        public script: string;

                        /** BatchDataFile scribingObjects. */
                        public scribingObjects: at.spg.protobuf.scribingdb.batchfile.IScribingObject[];

                        /** BatchDataFile modifierObjects. */
                        public modifierObjects: at.spg.protobuf.scribingdb.batchfile.IModifierObject[];

                        /** BatchDataFile metaObjects. */
                        public metaObjects: at.spg.protobuf.scribingdb.batchfile.IMetaObject[];

                        /**
                         * Creates a new BatchDataFile instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BatchDataFile instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.batchfile.IBatchDataFile): at.spg.protobuf.scribingdb.batchfile.BatchDataFile;

                        /**
                         * Encodes the specified BatchDataFile message. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.BatchDataFile.verify|verify} messages.
                         * @param message BatchDataFile message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.batchfile.IBatchDataFile, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BatchDataFile message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.BatchDataFile.verify|verify} messages.
                         * @param message BatchDataFile message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.batchfile.IBatchDataFile, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BatchDataFile message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BatchDataFile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.batchfile.BatchDataFile;

                        /**
                         * Decodes a BatchDataFile message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BatchDataFile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.batchfile.BatchDataFile;

                        /**
                         * Verifies a BatchDataFile message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BatchDataFile message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BatchDataFile
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.batchfile.BatchDataFile;

                        /**
                         * Creates a plain object from a BatchDataFile message. Also converts values to other types if specified.
                         * @param message BatchDataFile
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.batchfile.BatchDataFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BatchDataFile to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a FlatBatchData. */
                    interface IFlatBatchData {

                        /** FlatBatchData scribingObjects */
                        scribingObjects?: (at.spg.protobuf.scribingdb.batchfile.IScribingObject[]|null);

                        /** FlatBatchData metaObjects */
                        metaObjects?: (at.spg.protobuf.scribingdb.batchfile.IMetaObject[]|null);
                    }

                    /** Represents a FlatBatchData. */
                    class FlatBatchData implements IFlatBatchData {

                        /**
                         * Constructs a new FlatBatchData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.batchfile.IFlatBatchData);

                        /** FlatBatchData scribingObjects. */
                        public scribingObjects: at.spg.protobuf.scribingdb.batchfile.IScribingObject[];

                        /** FlatBatchData metaObjects. */
                        public metaObjects: at.spg.protobuf.scribingdb.batchfile.IMetaObject[];

                        /**
                         * Creates a new FlatBatchData instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FlatBatchData instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.batchfile.IFlatBatchData): at.spg.protobuf.scribingdb.batchfile.FlatBatchData;

                        /**
                         * Encodes the specified FlatBatchData message. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.FlatBatchData.verify|verify} messages.
                         * @param message FlatBatchData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.batchfile.IFlatBatchData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FlatBatchData message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.batchfile.FlatBatchData.verify|verify} messages.
                         * @param message FlatBatchData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.batchfile.IFlatBatchData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FlatBatchData message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FlatBatchData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.batchfile.FlatBatchData;

                        /**
                         * Decodes a FlatBatchData message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FlatBatchData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.batchfile.FlatBatchData;

                        /**
                         * Verifies a FlatBatchData message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FlatBatchData message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FlatBatchData
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.batchfile.FlatBatchData;

                        /**
                         * Creates a plain object from a FlatBatchData message. Also converts values to other types if specified.
                         * @param message FlatBatchData
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.batchfile.FlatBatchData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FlatBatchData to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace batchprocesslog. */
                namespace batchprocesslog {

                    /** Represents a BatchLogController */
                    class BatchLogController extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new BatchLogController service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new BatchLogController service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BatchLogController;

                        /**
                         * Calls GetBatchList.
                         * @param request GetBatchListReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and BatchListInfo
                         */
                        public getBatchList(request: at.spg.protobuf.scribingdb.batchprocesslog.IGetBatchListReq, callback: at.spg.protobuf.scribingdb.batchprocesslog.BatchLogController.GetBatchListCallback): void;

                        /**
                         * Calls GetBatchList.
                         * @param request GetBatchListReq message or plain object
                         * @returns Promise
                         */
                        public getBatchList(request: at.spg.protobuf.scribingdb.batchprocesslog.IGetBatchListReq): Promise<at.spg.protobuf.scribingdb.batchprocesslog.BatchListInfo>;

                        /**
                         * Calls LogDielectric.
                         * @param request DielectricBatchLog message or plain object
                         * @param callback Node-style callback called with the error, if any, and LogResponse
                         */
                        public logDielectric(request: at.spg.protobuf.scribingdb.batchprocesslog.IDielectricBatchLog, callback: at.spg.protobuf.scribingdb.batchprocesslog.BatchLogController.LogDielectricCallback): void;

                        /**
                         * Calls LogDielectric.
                         * @param request DielectricBatchLog message or plain object
                         * @returns Promise
                         */
                        public logDielectric(request: at.spg.protobuf.scribingdb.batchprocesslog.IDielectricBatchLog): Promise<at.spg.protobuf.scribingdb.batchprocesslog.LogResponse>;

                        /**
                         * Calls LogUvCuring.
                         * @param request UvCuringBatchLog message or plain object
                         * @param callback Node-style callback called with the error, if any, and LogResponse
                         */
                        public logUvCuring(request: at.spg.protobuf.scribingdb.batchprocesslog.IUvCuringBatchLog, callback: at.spg.protobuf.scribingdb.batchprocesslog.BatchLogController.LogUvCuringCallback): void;

                        /**
                         * Calls LogUvCuring.
                         * @param request UvCuringBatchLog message or plain object
                         * @returns Promise
                         */
                        public logUvCuring(request: at.spg.protobuf.scribingdb.batchprocesslog.IUvCuringBatchLog): Promise<at.spg.protobuf.scribingdb.batchprocesslog.LogResponse>;

                        /**
                         * Calls LogLaserProcess.
                         * @param request LaserProcessLog message or plain object
                         * @param callback Node-style callback called with the error, if any, and LogResponse
                         */
                        public logLaserProcess(request: at.spg.protobuf.scribingdb.batchprocesslog.ILaserProcessLog, callback: at.spg.protobuf.scribingdb.batchprocesslog.BatchLogController.LogLaserProcessCallback): void;

                        /**
                         * Calls LogLaserProcess.
                         * @param request LaserProcessLog message or plain object
                         * @returns Promise
                         */
                        public logLaserProcess(request: at.spg.protobuf.scribingdb.batchprocesslog.ILaserProcessLog): Promise<at.spg.protobuf.scribingdb.batchprocesslog.LogResponse>;
                    }

                    namespace BatchLogController {

                        /**
                         * Callback as used by {@link at.spg.protobuf.scribingdb.batchprocesslog.BatchLogController#getBatchList}.
                         * @param error Error, if any
                         * @param [response] BatchListInfo
                         */
                        type GetBatchListCallback = (error: (Error|null), response?: at.spg.protobuf.scribingdb.batchprocesslog.BatchListInfo) => void;

                        /**
                         * Callback as used by {@link at.spg.protobuf.scribingdb.batchprocesslog.BatchLogController#logDielectric}.
                         * @param error Error, if any
                         * @param [response] LogResponse
                         */
                        type LogDielectricCallback = (error: (Error|null), response?: at.spg.protobuf.scribingdb.batchprocesslog.LogResponse) => void;

                        /**
                         * Callback as used by {@link at.spg.protobuf.scribingdb.batchprocesslog.BatchLogController#logUvCuring}.
                         * @param error Error, if any
                         * @param [response] LogResponse
                         */
                        type LogUvCuringCallback = (error: (Error|null), response?: at.spg.protobuf.scribingdb.batchprocesslog.LogResponse) => void;

                        /**
                         * Callback as used by {@link at.spg.protobuf.scribingdb.batchprocesslog.BatchLogController#logLaserProcess}.
                         * @param error Error, if any
                         * @param [response] LogResponse
                         */
                        type LogLaserProcessCallback = (error: (Error|null), response?: at.spg.protobuf.scribingdb.batchprocesslog.LogResponse) => void;
                    }

                    /** Properties of a GetBatchListReq. */
                    interface IGetBatchListReq {
                    }

                    /** Represents a GetBatchListReq. */
                    class GetBatchListReq implements IGetBatchListReq {

                        /**
                         * Constructs a new GetBatchListReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.batchprocesslog.IGetBatchListReq);

                        /**
                         * Creates a new GetBatchListReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetBatchListReq instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.batchprocesslog.IGetBatchListReq): at.spg.protobuf.scribingdb.batchprocesslog.GetBatchListReq;

                        /**
                         * Encodes the specified GetBatchListReq message. Does not implicitly {@link at.spg.protobuf.scribingdb.batchprocesslog.GetBatchListReq.verify|verify} messages.
                         * @param message GetBatchListReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.batchprocesslog.IGetBatchListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetBatchListReq message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.batchprocesslog.GetBatchListReq.verify|verify} messages.
                         * @param message GetBatchListReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.batchprocesslog.IGetBatchListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetBatchListReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetBatchListReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.batchprocesslog.GetBatchListReq;

                        /**
                         * Decodes a GetBatchListReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetBatchListReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.batchprocesslog.GetBatchListReq;

                        /**
                         * Verifies a GetBatchListReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetBatchListReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetBatchListReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.batchprocesslog.GetBatchListReq;

                        /**
                         * Creates a plain object from a GetBatchListReq message. Also converts values to other types if specified.
                         * @param message GetBatchListReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.batchprocesslog.GetBatchListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetBatchListReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a BatchListInfo. */
                    interface IBatchListInfo {

                        /** BatchListInfo name */
                        name?: (string|null);
                    }

                    /** Represents a BatchListInfo. */
                    class BatchListInfo implements IBatchListInfo {

                        /**
                         * Constructs a new BatchListInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.batchprocesslog.IBatchListInfo);

                        /** BatchListInfo name. */
                        public name: string;

                        /**
                         * Creates a new BatchListInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BatchListInfo instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.batchprocesslog.IBatchListInfo): at.spg.protobuf.scribingdb.batchprocesslog.BatchListInfo;

                        /**
                         * Encodes the specified BatchListInfo message. Does not implicitly {@link at.spg.protobuf.scribingdb.batchprocesslog.BatchListInfo.verify|verify} messages.
                         * @param message BatchListInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.batchprocesslog.IBatchListInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BatchListInfo message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.batchprocesslog.BatchListInfo.verify|verify} messages.
                         * @param message BatchListInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.batchprocesslog.IBatchListInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BatchListInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BatchListInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.batchprocesslog.BatchListInfo;

                        /**
                         * Decodes a BatchListInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BatchListInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.batchprocesslog.BatchListInfo;

                        /**
                         * Verifies a BatchListInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BatchListInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BatchListInfo
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.batchprocesslog.BatchListInfo;

                        /**
                         * Creates a plain object from a BatchListInfo message. Also converts values to other types if specified.
                         * @param message BatchListInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.batchprocesslog.BatchListInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BatchListInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a LogResponse. */
                    interface ILogResponse {

                        /** LogResponse status */
                        status?: (number|null);

                        /** LogResponse message */
                        message?: (string|null);
                    }

                    /** Represents a LogResponse. */
                    class LogResponse implements ILogResponse {

                        /**
                         * Constructs a new LogResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.batchprocesslog.ILogResponse);

                        /** LogResponse status. */
                        public status: number;

                        /** LogResponse message. */
                        public message: string;

                        /**
                         * Creates a new LogResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LogResponse instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.batchprocesslog.ILogResponse): at.spg.protobuf.scribingdb.batchprocesslog.LogResponse;

                        /**
                         * Encodes the specified LogResponse message. Does not implicitly {@link at.spg.protobuf.scribingdb.batchprocesslog.LogResponse.verify|verify} messages.
                         * @param message LogResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.batchprocesslog.ILogResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LogResponse message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.batchprocesslog.LogResponse.verify|verify} messages.
                         * @param message LogResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.batchprocesslog.ILogResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LogResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LogResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.batchprocesslog.LogResponse;

                        /**
                         * Decodes a LogResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LogResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.batchprocesslog.LogResponse;

                        /**
                         * Verifies a LogResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LogResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LogResponse
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.batchprocesslog.LogResponse;

                        /**
                         * Creates a plain object from a LogResponse message. Also converts values to other types if specified.
                         * @param message LogResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.batchprocesslog.LogResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LogResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DielectricBatchLog. */
                    interface IDielectricBatchLog {

                        /** DielectricBatchLog targetBatch */
                        targetBatch?: (string|null);

                        /** DielectricBatchLog dpiX */
                        dpiX?: (number|null);

                        /** DielectricBatchLog dpiY */
                        dpiY?: (number|null);

                        /** DielectricBatchLog voltageHigh */
                        voltageHigh?: (number|null);

                        /** DielectricBatchLog tempMount_1 */
                        tempMount_1?: (number|null);

                        /** DielectricBatchLog tempMount_2 */
                        tempMount_2?: (number|null);

                        /** DielectricBatchLog tempInlet */
                        tempInlet?: (number|null);

                        /** DielectricBatchLog tempHead */
                        tempHead?: (number|null);

                        /** DielectricBatchLog purgeTime */
                        purgeTime?: (number|null);

                        /** DielectricBatchLog comment */
                        comment?: (string|null);
                    }

                    /** Represents a DielectricBatchLog. */
                    class DielectricBatchLog implements IDielectricBatchLog {

                        /**
                         * Constructs a new DielectricBatchLog.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.batchprocesslog.IDielectricBatchLog);

                        /** DielectricBatchLog targetBatch. */
                        public targetBatch: string;

                        /** DielectricBatchLog dpiX. */
                        public dpiX: number;

                        /** DielectricBatchLog dpiY. */
                        public dpiY: number;

                        /** DielectricBatchLog voltageHigh. */
                        public voltageHigh: number;

                        /** DielectricBatchLog tempMount_1. */
                        public tempMount_1: number;

                        /** DielectricBatchLog tempMount_2. */
                        public tempMount_2: number;

                        /** DielectricBatchLog tempInlet. */
                        public tempInlet: number;

                        /** DielectricBatchLog tempHead. */
                        public tempHead: number;

                        /** DielectricBatchLog purgeTime. */
                        public purgeTime: number;

                        /** DielectricBatchLog comment. */
                        public comment: string;

                        /**
                         * Creates a new DielectricBatchLog instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DielectricBatchLog instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.batchprocesslog.IDielectricBatchLog): at.spg.protobuf.scribingdb.batchprocesslog.DielectricBatchLog;

                        /**
                         * Encodes the specified DielectricBatchLog message. Does not implicitly {@link at.spg.protobuf.scribingdb.batchprocesslog.DielectricBatchLog.verify|verify} messages.
                         * @param message DielectricBatchLog message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.batchprocesslog.IDielectricBatchLog, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DielectricBatchLog message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.batchprocesslog.DielectricBatchLog.verify|verify} messages.
                         * @param message DielectricBatchLog message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.batchprocesslog.IDielectricBatchLog, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DielectricBatchLog message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DielectricBatchLog
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.batchprocesslog.DielectricBatchLog;

                        /**
                         * Decodes a DielectricBatchLog message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DielectricBatchLog
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.batchprocesslog.DielectricBatchLog;

                        /**
                         * Verifies a DielectricBatchLog message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DielectricBatchLog message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DielectricBatchLog
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.batchprocesslog.DielectricBatchLog;

                        /**
                         * Creates a plain object from a DielectricBatchLog message. Also converts values to other types if specified.
                         * @param message DielectricBatchLog
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.batchprocesslog.DielectricBatchLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DielectricBatchLog to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an UvCuringBatchLog. */
                    interface IUvCuringBatchLog {

                        /** UvCuringBatchLog targetBatch */
                        targetBatch?: (string|null);

                        /** UvCuringBatchLog curingTimeSeconds */
                        curingTimeSeconds?: (number|null);

                        /** UvCuringBatchLog curingPowerPercentage */
                        curingPowerPercentage?: (number|null);

                        /** UvCuringBatchLog comment */
                        comment?: (string|null);
                    }

                    /** Represents an UvCuringBatchLog. */
                    class UvCuringBatchLog implements IUvCuringBatchLog {

                        /**
                         * Constructs a new UvCuringBatchLog.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.batchprocesslog.IUvCuringBatchLog);

                        /** UvCuringBatchLog targetBatch. */
                        public targetBatch: string;

                        /** UvCuringBatchLog curingTimeSeconds. */
                        public curingTimeSeconds: number;

                        /** UvCuringBatchLog curingPowerPercentage. */
                        public curingPowerPercentage: number;

                        /** UvCuringBatchLog comment. */
                        public comment: string;

                        /**
                         * Creates a new UvCuringBatchLog instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UvCuringBatchLog instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.batchprocesslog.IUvCuringBatchLog): at.spg.protobuf.scribingdb.batchprocesslog.UvCuringBatchLog;

                        /**
                         * Encodes the specified UvCuringBatchLog message. Does not implicitly {@link at.spg.protobuf.scribingdb.batchprocesslog.UvCuringBatchLog.verify|verify} messages.
                         * @param message UvCuringBatchLog message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.batchprocesslog.IUvCuringBatchLog, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UvCuringBatchLog message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.batchprocesslog.UvCuringBatchLog.verify|verify} messages.
                         * @param message UvCuringBatchLog message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.batchprocesslog.IUvCuringBatchLog, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UvCuringBatchLog message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UvCuringBatchLog
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.batchprocesslog.UvCuringBatchLog;

                        /**
                         * Decodes an UvCuringBatchLog message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UvCuringBatchLog
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.batchprocesslog.UvCuringBatchLog;

                        /**
                         * Verifies an UvCuringBatchLog message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UvCuringBatchLog message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UvCuringBatchLog
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.batchprocesslog.UvCuringBatchLog;

                        /**
                         * Creates a plain object from an UvCuringBatchLog message. Also converts values to other types if specified.
                         * @param message UvCuringBatchLog
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.batchprocesslog.UvCuringBatchLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UvCuringBatchLog to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a LaserProcessLogSettings. */
                    interface ILaserProcessLogSettings {

                        /** LaserProcessLogSettings name */
                        name?: (string|null);

                        /** LaserProcessLogSettings presetName */
                        presetName?: (string|null);

                        /** LaserProcessLogSettings wavelength */
                        wavelength?: (number|null);

                        /** LaserProcessLogSettings pulseEnergy */
                        pulseEnergy?: (number|null);

                        /** LaserProcessLogSettings pulsePicker */
                        pulsePicker?: (number|null);

                        /** LaserProcessLogSettings attenuation */
                        attenuation?: (number|null);
                    }

                    /** Represents a LaserProcessLogSettings. */
                    class LaserProcessLogSettings implements ILaserProcessLogSettings {

                        /**
                         * Constructs a new LaserProcessLogSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.batchprocesslog.ILaserProcessLogSettings);

                        /** LaserProcessLogSettings name. */
                        public name: string;

                        /** LaserProcessLogSettings presetName. */
                        public presetName: string;

                        /** LaserProcessLogSettings wavelength. */
                        public wavelength: number;

                        /** LaserProcessLogSettings pulseEnergy. */
                        public pulseEnergy: number;

                        /** LaserProcessLogSettings pulsePicker. */
                        public pulsePicker: number;

                        /** LaserProcessLogSettings attenuation. */
                        public attenuation: number;

                        /**
                         * Creates a new LaserProcessLogSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LaserProcessLogSettings instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.batchprocesslog.ILaserProcessLogSettings): at.spg.protobuf.scribingdb.batchprocesslog.LaserProcessLogSettings;

                        /**
                         * Encodes the specified LaserProcessLogSettings message. Does not implicitly {@link at.spg.protobuf.scribingdb.batchprocesslog.LaserProcessLogSettings.verify|verify} messages.
                         * @param message LaserProcessLogSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.batchprocesslog.ILaserProcessLogSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LaserProcessLogSettings message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.batchprocesslog.LaserProcessLogSettings.verify|verify} messages.
                         * @param message LaserProcessLogSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.batchprocesslog.ILaserProcessLogSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LaserProcessLogSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LaserProcessLogSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.batchprocesslog.LaserProcessLogSettings;

                        /**
                         * Decodes a LaserProcessLogSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LaserProcessLogSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.batchprocesslog.LaserProcessLogSettings;

                        /**
                         * Verifies a LaserProcessLogSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LaserProcessLogSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LaserProcessLogSettings
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.batchprocesslog.LaserProcessLogSettings;

                        /**
                         * Creates a plain object from a LaserProcessLogSettings message. Also converts values to other types if specified.
                         * @param message LaserProcessLogSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.batchprocesslog.LaserProcessLogSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LaserProcessLogSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a LaserProcessLog. */
                    interface ILaserProcessLog {

                        /** LaserProcessLog targetBatch */
                        targetBatch?: (string|null);

                        /** LaserProcessLog comment */
                        comment?: (string|null);

                        /** LaserProcessLog originX */
                        originX?: (number|null);

                        /** LaserProcessLog originY */
                        originY?: (number|null);

                        /** LaserProcessLog rotation */
                        rotation?: (number|null);

                        /** LaserProcessLog actualLaserFile */
                        actualLaserFile?: (string|null);

                        /** LaserProcessLog usedSettings */
                        usedSettings?: ({ [k: string]: at.spg.protobuf.scribingdb.batchprocesslog.ILaserProcessLogSettings }|null);
                    }

                    /** Represents a LaserProcessLog. */
                    class LaserProcessLog implements ILaserProcessLog {

                        /**
                         * Constructs a new LaserProcessLog.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.batchprocesslog.ILaserProcessLog);

                        /** LaserProcessLog targetBatch. */
                        public targetBatch: string;

                        /** LaserProcessLog comment. */
                        public comment: string;

                        /** LaserProcessLog originX. */
                        public originX: number;

                        /** LaserProcessLog originY. */
                        public originY: number;

                        /** LaserProcessLog rotation. */
                        public rotation: number;

                        /** LaserProcessLog actualLaserFile. */
                        public actualLaserFile: string;

                        /** LaserProcessLog usedSettings. */
                        public usedSettings: { [k: string]: at.spg.protobuf.scribingdb.batchprocesslog.ILaserProcessLogSettings };

                        /**
                         * Creates a new LaserProcessLog instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LaserProcessLog instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.batchprocesslog.ILaserProcessLog): at.spg.protobuf.scribingdb.batchprocesslog.LaserProcessLog;

                        /**
                         * Encodes the specified LaserProcessLog message. Does not implicitly {@link at.spg.protobuf.scribingdb.batchprocesslog.LaserProcessLog.verify|verify} messages.
                         * @param message LaserProcessLog message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.batchprocesslog.ILaserProcessLog, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LaserProcessLog message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.batchprocesslog.LaserProcessLog.verify|verify} messages.
                         * @param message LaserProcessLog message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.batchprocesslog.ILaserProcessLog, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LaserProcessLog message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LaserProcessLog
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.batchprocesslog.LaserProcessLog;

                        /**
                         * Decodes a LaserProcessLog message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LaserProcessLog
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.batchprocesslog.LaserProcessLog;

                        /**
                         * Verifies a LaserProcessLog message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LaserProcessLog message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LaserProcessLog
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.batchprocesslog.LaserProcessLog;

                        /**
                         * Creates a plain object from a LaserProcessLog message. Also converts values to other types if specified.
                         * @param message LaserProcessLog
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.batchprocesslog.LaserProcessLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LaserProcessLog to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace blueprint. */
                namespace blueprint {

                    /** Properties of a BlueprintItem. */
                    interface IBlueprintItem {

                        /** BlueprintItem name */
                        name?: (string|null);

                        /** BlueprintItem data */
                        data?: (at.spg.protobuf.scribingdb.batchfile.IBatchDataFile|null);
                    }

                    /** Represents a BlueprintItem. */
                    class BlueprintItem implements IBlueprintItem {

                        /**
                         * Constructs a new BlueprintItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.blueprint.IBlueprintItem);

                        /** BlueprintItem name. */
                        public name: string;

                        /** BlueprintItem data. */
                        public data?: (at.spg.protobuf.scribingdb.batchfile.IBatchDataFile|null);

                        /**
                         * Creates a new BlueprintItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BlueprintItem instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.blueprint.IBlueprintItem): at.spg.protobuf.scribingdb.blueprint.BlueprintItem;

                        /**
                         * Encodes the specified BlueprintItem message. Does not implicitly {@link at.spg.protobuf.scribingdb.blueprint.BlueprintItem.verify|verify} messages.
                         * @param message BlueprintItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.blueprint.IBlueprintItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BlueprintItem message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.blueprint.BlueprintItem.verify|verify} messages.
                         * @param message BlueprintItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.blueprint.IBlueprintItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BlueprintItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BlueprintItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.blueprint.BlueprintItem;

                        /**
                         * Decodes a BlueprintItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BlueprintItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.blueprint.BlueprintItem;

                        /**
                         * Verifies a BlueprintItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BlueprintItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BlueprintItem
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.blueprint.BlueprintItem;

                        /**
                         * Creates a plain object from a BlueprintItem message. Also converts values to other types if specified.
                         * @param message BlueprintItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.blueprint.BlueprintItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BlueprintItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Represents a BlueprintsController */
                    class BlueprintsController extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new BlueprintsController service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new BlueprintsController service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BlueprintsController;

                        /**
                         * Calls GetBlueprints.
                         * @param request GetBlueprintsReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and GetBlueprintItem
                         */
                        public getBlueprints(request: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintsReq, callback: at.spg.protobuf.scribingdb.blueprint.BlueprintsController.GetBlueprintsCallback): void;

                        /**
                         * Calls GetBlueprints.
                         * @param request GetBlueprintsReq message or plain object
                         * @returns Promise
                         */
                        public getBlueprints(request: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintsReq): Promise<at.spg.protobuf.scribingdb.blueprint.GetBlueprintItem>;

                        /**
                         * Calls GetBlueprint.
                         * @param request GetBlueprintReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and GetBlueprintRes
                         */
                        public getBlueprint(request: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintReq, callback: at.spg.protobuf.scribingdb.blueprint.BlueprintsController.GetBlueprintCallback): void;

                        /**
                         * Calls GetBlueprint.
                         * @param request GetBlueprintReq message or plain object
                         * @returns Promise
                         */
                        public getBlueprint(request: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintReq): Promise<at.spg.protobuf.scribingdb.blueprint.GetBlueprintRes>;

                        /**
                         * Calls UpdateBlueprint.
                         * @param request UpdateBlueprintReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and UpdateBlueprintRes
                         */
                        public updateBlueprint(request: at.spg.protobuf.scribingdb.blueprint.IUpdateBlueprintReq, callback: at.spg.protobuf.scribingdb.blueprint.BlueprintsController.UpdateBlueprintCallback): void;

                        /**
                         * Calls UpdateBlueprint.
                         * @param request UpdateBlueprintReq message or plain object
                         * @returns Promise
                         */
                        public updateBlueprint(request: at.spg.protobuf.scribingdb.blueprint.IUpdateBlueprintReq): Promise<at.spg.protobuf.scribingdb.blueprint.UpdateBlueprintRes>;
                    }

                    namespace BlueprintsController {

                        /**
                         * Callback as used by {@link at.spg.protobuf.scribingdb.blueprint.BlueprintsController#getBlueprints}.
                         * @param error Error, if any
                         * @param [response] GetBlueprintItem
                         */
                        type GetBlueprintsCallback = (error: (Error|null), response?: at.spg.protobuf.scribingdb.blueprint.GetBlueprintItem) => void;

                        /**
                         * Callback as used by {@link at.spg.protobuf.scribingdb.blueprint.BlueprintsController#getBlueprint}.
                         * @param error Error, if any
                         * @param [response] GetBlueprintRes
                         */
                        type GetBlueprintCallback = (error: (Error|null), response?: at.spg.protobuf.scribingdb.blueprint.GetBlueprintRes) => void;

                        /**
                         * Callback as used by {@link at.spg.protobuf.scribingdb.blueprint.BlueprintsController#updateBlueprint}.
                         * @param error Error, if any
                         * @param [response] UpdateBlueprintRes
                         */
                        type UpdateBlueprintCallback = (error: (Error|null), response?: at.spg.protobuf.scribingdb.blueprint.UpdateBlueprintRes) => void;
                    }

                    /** Properties of a GetBlueprintsReq. */
                    interface IGetBlueprintsReq {

                        /** GetBlueprintsReq filterName */
                        filterName?: (string|null);
                    }

                    /** Represents a GetBlueprintsReq. */
                    class GetBlueprintsReq implements IGetBlueprintsReq {

                        /**
                         * Constructs a new GetBlueprintsReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintsReq);

                        /** GetBlueprintsReq filterName. */
                        public filterName: string;

                        /**
                         * Creates a new GetBlueprintsReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetBlueprintsReq instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintsReq): at.spg.protobuf.scribingdb.blueprint.GetBlueprintsReq;

                        /**
                         * Encodes the specified GetBlueprintsReq message. Does not implicitly {@link at.spg.protobuf.scribingdb.blueprint.GetBlueprintsReq.verify|verify} messages.
                         * @param message GetBlueprintsReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintsReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetBlueprintsReq message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.blueprint.GetBlueprintsReq.verify|verify} messages.
                         * @param message GetBlueprintsReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintsReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetBlueprintsReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetBlueprintsReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.blueprint.GetBlueprintsReq;

                        /**
                         * Decodes a GetBlueprintsReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetBlueprintsReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.blueprint.GetBlueprintsReq;

                        /**
                         * Verifies a GetBlueprintsReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetBlueprintsReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetBlueprintsReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.blueprint.GetBlueprintsReq;

                        /**
                         * Creates a plain object from a GetBlueprintsReq message. Also converts values to other types if specified.
                         * @param message GetBlueprintsReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.blueprint.GetBlueprintsReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetBlueprintsReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetBlueprintItem. */
                    interface IGetBlueprintItem {

                        /** GetBlueprintItem id */
                        id?: (string|null);

                        /** GetBlueprintItem name */
                        name?: (string|null);

                        /** GetBlueprintItem lastModified */
                        lastModified?: (number|null);
                    }

                    /** Represents a GetBlueprintItem. */
                    class GetBlueprintItem implements IGetBlueprintItem {

                        /**
                         * Constructs a new GetBlueprintItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintItem);

                        /** GetBlueprintItem id. */
                        public id: string;

                        /** GetBlueprintItem name. */
                        public name: string;

                        /** GetBlueprintItem lastModified. */
                        public lastModified: number;

                        /**
                         * Creates a new GetBlueprintItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetBlueprintItem instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintItem): at.spg.protobuf.scribingdb.blueprint.GetBlueprintItem;

                        /**
                         * Encodes the specified GetBlueprintItem message. Does not implicitly {@link at.spg.protobuf.scribingdb.blueprint.GetBlueprintItem.verify|verify} messages.
                         * @param message GetBlueprintItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetBlueprintItem message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.blueprint.GetBlueprintItem.verify|verify} messages.
                         * @param message GetBlueprintItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetBlueprintItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetBlueprintItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.blueprint.GetBlueprintItem;

                        /**
                         * Decodes a GetBlueprintItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetBlueprintItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.blueprint.GetBlueprintItem;

                        /**
                         * Verifies a GetBlueprintItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetBlueprintItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetBlueprintItem
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.blueprint.GetBlueprintItem;

                        /**
                         * Creates a plain object from a GetBlueprintItem message. Also converts values to other types if specified.
                         * @param message GetBlueprintItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.blueprint.GetBlueprintItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetBlueprintItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetBlueprintReq. */
                    interface IGetBlueprintReq {

                        /** GetBlueprintReq id */
                        id?: (string|null);
                    }

                    /** Represents a GetBlueprintReq. */
                    class GetBlueprintReq implements IGetBlueprintReq {

                        /**
                         * Constructs a new GetBlueprintReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintReq);

                        /** GetBlueprintReq id. */
                        public id: string;

                        /**
                         * Creates a new GetBlueprintReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetBlueprintReq instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintReq): at.spg.protobuf.scribingdb.blueprint.GetBlueprintReq;

                        /**
                         * Encodes the specified GetBlueprintReq message. Does not implicitly {@link at.spg.protobuf.scribingdb.blueprint.GetBlueprintReq.verify|verify} messages.
                         * @param message GetBlueprintReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetBlueprintReq message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.blueprint.GetBlueprintReq.verify|verify} messages.
                         * @param message GetBlueprintReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetBlueprintReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetBlueprintReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.blueprint.GetBlueprintReq;

                        /**
                         * Decodes a GetBlueprintReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetBlueprintReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.blueprint.GetBlueprintReq;

                        /**
                         * Verifies a GetBlueprintReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetBlueprintReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetBlueprintReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.blueprint.GetBlueprintReq;

                        /**
                         * Creates a plain object from a GetBlueprintReq message. Also converts values to other types if specified.
                         * @param message GetBlueprintReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.blueprint.GetBlueprintReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetBlueprintReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetBlueprintRes. */
                    interface IGetBlueprintRes {

                        /** GetBlueprintRes blueprint */
                        blueprint?: (at.spg.protobuf.scribingdb.blueprint.IBlueprintItem|null);
                    }

                    /** Represents a GetBlueprintRes. */
                    class GetBlueprintRes implements IGetBlueprintRes {

                        /**
                         * Constructs a new GetBlueprintRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintRes);

                        /** GetBlueprintRes blueprint. */
                        public blueprint?: (at.spg.protobuf.scribingdb.blueprint.IBlueprintItem|null);

                        /**
                         * Creates a new GetBlueprintRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetBlueprintRes instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintRes): at.spg.protobuf.scribingdb.blueprint.GetBlueprintRes;

                        /**
                         * Encodes the specified GetBlueprintRes message. Does not implicitly {@link at.spg.protobuf.scribingdb.blueprint.GetBlueprintRes.verify|verify} messages.
                         * @param message GetBlueprintRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetBlueprintRes message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.blueprint.GetBlueprintRes.verify|verify} messages.
                         * @param message GetBlueprintRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.blueprint.IGetBlueprintRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetBlueprintRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetBlueprintRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.blueprint.GetBlueprintRes;

                        /**
                         * Decodes a GetBlueprintRes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetBlueprintRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.blueprint.GetBlueprintRes;

                        /**
                         * Verifies a GetBlueprintRes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetBlueprintRes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetBlueprintRes
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.blueprint.GetBlueprintRes;

                        /**
                         * Creates a plain object from a GetBlueprintRes message. Also converts values to other types if specified.
                         * @param message GetBlueprintRes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.blueprint.GetBlueprintRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetBlueprintRes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an UpdateBlueprintReq. */
                    interface IUpdateBlueprintReq {

                        /** UpdateBlueprintReq id */
                        id?: (string|null);

                        /** UpdateBlueprintReq name */
                        name?: (string|null);

                        /** UpdateBlueprintReq reason */
                        reason?: (string|null);

                        /** UpdateBlueprintReq newData */
                        newData?: (at.spg.protobuf.scribingdb.batchfile.IBatchDataFile|null);
                    }

                    /** Represents an UpdateBlueprintReq. */
                    class UpdateBlueprintReq implements IUpdateBlueprintReq {

                        /**
                         * Constructs a new UpdateBlueprintReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.blueprint.IUpdateBlueprintReq);

                        /** UpdateBlueprintReq id. */
                        public id: string;

                        /** UpdateBlueprintReq name. */
                        public name: string;

                        /** UpdateBlueprintReq reason. */
                        public reason: string;

                        /** UpdateBlueprintReq newData. */
                        public newData?: (at.spg.protobuf.scribingdb.batchfile.IBatchDataFile|null);

                        /**
                         * Creates a new UpdateBlueprintReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateBlueprintReq instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.blueprint.IUpdateBlueprintReq): at.spg.protobuf.scribingdb.blueprint.UpdateBlueprintReq;

                        /**
                         * Encodes the specified UpdateBlueprintReq message. Does not implicitly {@link at.spg.protobuf.scribingdb.blueprint.UpdateBlueprintReq.verify|verify} messages.
                         * @param message UpdateBlueprintReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.blueprint.IUpdateBlueprintReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateBlueprintReq message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.blueprint.UpdateBlueprintReq.verify|verify} messages.
                         * @param message UpdateBlueprintReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.blueprint.IUpdateBlueprintReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateBlueprintReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateBlueprintReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.blueprint.UpdateBlueprintReq;

                        /**
                         * Decodes an UpdateBlueprintReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateBlueprintReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.blueprint.UpdateBlueprintReq;

                        /**
                         * Verifies an UpdateBlueprintReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateBlueprintReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateBlueprintReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.blueprint.UpdateBlueprintReq;

                        /**
                         * Creates a plain object from an UpdateBlueprintReq message. Also converts values to other types if specified.
                         * @param message UpdateBlueprintReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.blueprint.UpdateBlueprintReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateBlueprintReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an UpdateBlueprintRes. */
                    interface IUpdateBlueprintRes {
                    }

                    /** Represents an UpdateBlueprintRes. */
                    class UpdateBlueprintRes implements IUpdateBlueprintRes {

                        /**
                         * Constructs a new UpdateBlueprintRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.blueprint.IUpdateBlueprintRes);

                        /**
                         * Creates a new UpdateBlueprintRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateBlueprintRes instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.blueprint.IUpdateBlueprintRes): at.spg.protobuf.scribingdb.blueprint.UpdateBlueprintRes;

                        /**
                         * Encodes the specified UpdateBlueprintRes message. Does not implicitly {@link at.spg.protobuf.scribingdb.blueprint.UpdateBlueprintRes.verify|verify} messages.
                         * @param message UpdateBlueprintRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.blueprint.IUpdateBlueprintRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateBlueprintRes message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.blueprint.UpdateBlueprintRes.verify|verify} messages.
                         * @param message UpdateBlueprintRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.blueprint.IUpdateBlueprintRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateBlueprintRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateBlueprintRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.blueprint.UpdateBlueprintRes;

                        /**
                         * Decodes an UpdateBlueprintRes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateBlueprintRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.blueprint.UpdateBlueprintRes;

                        /**
                         * Verifies an UpdateBlueprintRes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateBlueprintRes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateBlueprintRes
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.blueprint.UpdateBlueprintRes;

                        /**
                         * Creates a plain object from an UpdateBlueprintRes message. Also converts values to other types if specified.
                         * @param message UpdateBlueprintRes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.blueprint.UpdateBlueprintRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateBlueprintRes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace cigsdefects. */
                namespace cigsdefects {

                    /** Represents a CigsDefectsController */
                    class CigsDefectsController extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new CigsDefectsController service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new CigsDefectsController service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CigsDefectsController;

                        /**
                         * Calls PostDefectsImage.
                         * @param request PostDefectsImagePayload message or plain object
                         * @param callback Node-style callback called with the error, if any, and PostDefectsImageResponse
                         */
                        public postDefectsImage(request: at.spg.protobuf.scribingdb.cigsdefects.IPostDefectsImagePayload, callback: at.spg.protobuf.scribingdb.cigsdefects.CigsDefectsController.PostDefectsImageCallback): void;

                        /**
                         * Calls PostDefectsImage.
                         * @param request PostDefectsImagePayload message or plain object
                         * @returns Promise
                         */
                        public postDefectsImage(request: at.spg.protobuf.scribingdb.cigsdefects.IPostDefectsImagePayload): Promise<at.spg.protobuf.scribingdb.cigsdefects.PostDefectsImageResponse>;

                        /**
                         * Calls GetSolarFoils.
                         * @param request GetSolarFoilsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and GetSolarFoilsResponse
                         */
                        public getSolarFoils(request: at.spg.protobuf.scribingdb.cigsdefects.IGetSolarFoilsRequest, callback: at.spg.protobuf.scribingdb.cigsdefects.CigsDefectsController.GetSolarFoilsCallback): void;

                        /**
                         * Calls GetSolarFoils.
                         * @param request GetSolarFoilsRequest message or plain object
                         * @returns Promise
                         */
                        public getSolarFoils(request: at.spg.protobuf.scribingdb.cigsdefects.IGetSolarFoilsRequest): Promise<at.spg.protobuf.scribingdb.cigsdefects.GetSolarFoilsResponse>;
                    }

                    namespace CigsDefectsController {

                        /**
                         * Callback as used by {@link at.spg.protobuf.scribingdb.cigsdefects.CigsDefectsController#postDefectsImage}.
                         * @param error Error, if any
                         * @param [response] PostDefectsImageResponse
                         */
                        type PostDefectsImageCallback = (error: (Error|null), response?: at.spg.protobuf.scribingdb.cigsdefects.PostDefectsImageResponse) => void;

                        /**
                         * Callback as used by {@link at.spg.protobuf.scribingdb.cigsdefects.CigsDefectsController#getSolarFoils}.
                         * @param error Error, if any
                         * @param [response] GetSolarFoilsResponse
                         */
                        type GetSolarFoilsCallback = (error: (Error|null), response?: at.spg.protobuf.scribingdb.cigsdefects.GetSolarFoilsResponse) => void;
                    }

                    /** Properties of a PostDefectsImagePayload. */
                    interface IPostDefectsImagePayload {

                        /** PostDefectsImagePayload info */
                        info?: (at.spg.protobuf.scribingdb.cigsdefects.IImageInfo|null);

                        /** PostDefectsImagePayload dataChunk */
                        dataChunk?: (Uint8Array|null);
                    }

                    /** Represents a PostDefectsImagePayload. */
                    class PostDefectsImagePayload implements IPostDefectsImagePayload {

                        /**
                         * Constructs a new PostDefectsImagePayload.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.cigsdefects.IPostDefectsImagePayload);

                        /** PostDefectsImagePayload info. */
                        public info?: (at.spg.protobuf.scribingdb.cigsdefects.IImageInfo|null);

                        /** PostDefectsImagePayload dataChunk. */
                        public dataChunk?: (Uint8Array|null);

                        /** PostDefectsImagePayload data. */
                        public data?: ("info"|"dataChunk");

                        /**
                         * Creates a new PostDefectsImagePayload instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PostDefectsImagePayload instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.cigsdefects.IPostDefectsImagePayload): at.spg.protobuf.scribingdb.cigsdefects.PostDefectsImagePayload;

                        /**
                         * Encodes the specified PostDefectsImagePayload message. Does not implicitly {@link at.spg.protobuf.scribingdb.cigsdefects.PostDefectsImagePayload.verify|verify} messages.
                         * @param message PostDefectsImagePayload message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.cigsdefects.IPostDefectsImagePayload, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PostDefectsImagePayload message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.cigsdefects.PostDefectsImagePayload.verify|verify} messages.
                         * @param message PostDefectsImagePayload message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.cigsdefects.IPostDefectsImagePayload, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PostDefectsImagePayload message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PostDefectsImagePayload
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.cigsdefects.PostDefectsImagePayload;

                        /**
                         * Decodes a PostDefectsImagePayload message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PostDefectsImagePayload
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.cigsdefects.PostDefectsImagePayload;

                        /**
                         * Verifies a PostDefectsImagePayload message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PostDefectsImagePayload message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PostDefectsImagePayload
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.cigsdefects.PostDefectsImagePayload;

                        /**
                         * Creates a plain object from a PostDefectsImagePayload message. Also converts values to other types if specified.
                         * @param message PostDefectsImagePayload
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.cigsdefects.PostDefectsImagePayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PostDefectsImagePayload to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an ImageInfo. */
                    interface IImageInfo {

                        /** ImageInfo imageName */
                        imageName?: (string|null);

                        /** ImageInfo posX */
                        posX?: (number|null);

                        /** ImageInfo posY */
                        posY?: (number|null);

                        /** ImageInfo timestamp */
                        timestamp?: (number|null);

                        /** ImageInfo foilId */
                        foilId?: (string|null);
                    }

                    /** Represents an ImageInfo. */
                    class ImageInfo implements IImageInfo {

                        /**
                         * Constructs a new ImageInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.cigsdefects.IImageInfo);

                        /** ImageInfo imageName. */
                        public imageName: string;

                        /** ImageInfo posX. */
                        public posX?: (number|null);

                        /** ImageInfo posY. */
                        public posY?: (number|null);

                        /** ImageInfo timestamp. */
                        public timestamp?: (number|null);

                        /** ImageInfo foilId. */
                        public foilId?: (string|null);

                        /** ImageInfo _posX. */
                        public _posX?: "posX";

                        /** ImageInfo _posY. */
                        public _posY?: "posY";

                        /** ImageInfo _timestamp. */
                        public _timestamp?: "timestamp";

                        /** ImageInfo _foilId. */
                        public _foilId?: "foilId";

                        /**
                         * Creates a new ImageInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ImageInfo instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.cigsdefects.IImageInfo): at.spg.protobuf.scribingdb.cigsdefects.ImageInfo;

                        /**
                         * Encodes the specified ImageInfo message. Does not implicitly {@link at.spg.protobuf.scribingdb.cigsdefects.ImageInfo.verify|verify} messages.
                         * @param message ImageInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.cigsdefects.IImageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ImageInfo message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.cigsdefects.ImageInfo.verify|verify} messages.
                         * @param message ImageInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.cigsdefects.IImageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ImageInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ImageInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.cigsdefects.ImageInfo;

                        /**
                         * Decodes an ImageInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ImageInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.cigsdefects.ImageInfo;

                        /**
                         * Verifies an ImageInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ImageInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ImageInfo
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.cigsdefects.ImageInfo;

                        /**
                         * Creates a plain object from an ImageInfo message. Also converts values to other types if specified.
                         * @param message ImageInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.cigsdefects.ImageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ImageInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a PostDefectsImageResponse. */
                    interface IPostDefectsImageResponse {

                        /** PostDefectsImageResponse receviedSize */
                        receviedSize?: (number|null);
                    }

                    /** Represents a PostDefectsImageResponse. */
                    class PostDefectsImageResponse implements IPostDefectsImageResponse {

                        /**
                         * Constructs a new PostDefectsImageResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.cigsdefects.IPostDefectsImageResponse);

                        /** PostDefectsImageResponse receviedSize. */
                        public receviedSize: number;

                        /**
                         * Creates a new PostDefectsImageResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PostDefectsImageResponse instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.cigsdefects.IPostDefectsImageResponse): at.spg.protobuf.scribingdb.cigsdefects.PostDefectsImageResponse;

                        /**
                         * Encodes the specified PostDefectsImageResponse message. Does not implicitly {@link at.spg.protobuf.scribingdb.cigsdefects.PostDefectsImageResponse.verify|verify} messages.
                         * @param message PostDefectsImageResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.cigsdefects.IPostDefectsImageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PostDefectsImageResponse message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.cigsdefects.PostDefectsImageResponse.verify|verify} messages.
                         * @param message PostDefectsImageResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.cigsdefects.IPostDefectsImageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PostDefectsImageResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PostDefectsImageResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.cigsdefects.PostDefectsImageResponse;

                        /**
                         * Decodes a PostDefectsImageResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PostDefectsImageResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.cigsdefects.PostDefectsImageResponse;

                        /**
                         * Verifies a PostDefectsImageResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PostDefectsImageResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PostDefectsImageResponse
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.cigsdefects.PostDefectsImageResponse;

                        /**
                         * Creates a plain object from a PostDefectsImageResponse message. Also converts values to other types if specified.
                         * @param message PostDefectsImageResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.cigsdefects.PostDefectsImageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PostDefectsImageResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetSolarFoilsRequest. */
                    interface IGetSolarFoilsRequest {
                    }

                    /** Represents a GetSolarFoilsRequest. */
                    class GetSolarFoilsRequest implements IGetSolarFoilsRequest {

                        /**
                         * Constructs a new GetSolarFoilsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.cigsdefects.IGetSolarFoilsRequest);

                        /**
                         * Creates a new GetSolarFoilsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetSolarFoilsRequest instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.cigsdefects.IGetSolarFoilsRequest): at.spg.protobuf.scribingdb.cigsdefects.GetSolarFoilsRequest;

                        /**
                         * Encodes the specified GetSolarFoilsRequest message. Does not implicitly {@link at.spg.protobuf.scribingdb.cigsdefects.GetSolarFoilsRequest.verify|verify} messages.
                         * @param message GetSolarFoilsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.cigsdefects.IGetSolarFoilsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetSolarFoilsRequest message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.cigsdefects.GetSolarFoilsRequest.verify|verify} messages.
                         * @param message GetSolarFoilsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.cigsdefects.IGetSolarFoilsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetSolarFoilsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetSolarFoilsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.cigsdefects.GetSolarFoilsRequest;

                        /**
                         * Decodes a GetSolarFoilsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetSolarFoilsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.cigsdefects.GetSolarFoilsRequest;

                        /**
                         * Verifies a GetSolarFoilsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetSolarFoilsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetSolarFoilsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.cigsdefects.GetSolarFoilsRequest;

                        /**
                         * Creates a plain object from a GetSolarFoilsRequest message. Also converts values to other types if specified.
                         * @param message GetSolarFoilsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.cigsdefects.GetSolarFoilsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetSolarFoilsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a SolarFoilInfo. */
                    interface ISolarFoilInfo {

                        /** SolarFoilInfo id */
                        id?: (string|null);

                        /** SolarFoilInfo name */
                        name?: (string|null);
                    }

                    /** Represents a SolarFoilInfo. */
                    class SolarFoilInfo implements ISolarFoilInfo {

                        /**
                         * Constructs a new SolarFoilInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.cigsdefects.ISolarFoilInfo);

                        /** SolarFoilInfo id. */
                        public id: string;

                        /** SolarFoilInfo name. */
                        public name: string;

                        /**
                         * Creates a new SolarFoilInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SolarFoilInfo instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.cigsdefects.ISolarFoilInfo): at.spg.protobuf.scribingdb.cigsdefects.SolarFoilInfo;

                        /**
                         * Encodes the specified SolarFoilInfo message. Does not implicitly {@link at.spg.protobuf.scribingdb.cigsdefects.SolarFoilInfo.verify|verify} messages.
                         * @param message SolarFoilInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.cigsdefects.ISolarFoilInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SolarFoilInfo message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.cigsdefects.SolarFoilInfo.verify|verify} messages.
                         * @param message SolarFoilInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.cigsdefects.ISolarFoilInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SolarFoilInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SolarFoilInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.cigsdefects.SolarFoilInfo;

                        /**
                         * Decodes a SolarFoilInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SolarFoilInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.cigsdefects.SolarFoilInfo;

                        /**
                         * Verifies a SolarFoilInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SolarFoilInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SolarFoilInfo
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.cigsdefects.SolarFoilInfo;

                        /**
                         * Creates a plain object from a SolarFoilInfo message. Also converts values to other types if specified.
                         * @param message SolarFoilInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.cigsdefects.SolarFoilInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SolarFoilInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetSolarFoilsResponse. */
                    interface IGetSolarFoilsResponse {

                        /** GetSolarFoilsResponse data */
                        data?: (at.spg.protobuf.scribingdb.cigsdefects.ISolarFoilInfo[]|null);
                    }

                    /** Represents a GetSolarFoilsResponse. */
                    class GetSolarFoilsResponse implements IGetSolarFoilsResponse {

                        /**
                         * Constructs a new GetSolarFoilsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.cigsdefects.IGetSolarFoilsResponse);

                        /** GetSolarFoilsResponse data. */
                        public data: at.spg.protobuf.scribingdb.cigsdefects.ISolarFoilInfo[];

                        /**
                         * Creates a new GetSolarFoilsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetSolarFoilsResponse instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.cigsdefects.IGetSolarFoilsResponse): at.spg.protobuf.scribingdb.cigsdefects.GetSolarFoilsResponse;

                        /**
                         * Encodes the specified GetSolarFoilsResponse message. Does not implicitly {@link at.spg.protobuf.scribingdb.cigsdefects.GetSolarFoilsResponse.verify|verify} messages.
                         * @param message GetSolarFoilsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.cigsdefects.IGetSolarFoilsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetSolarFoilsResponse message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.cigsdefects.GetSolarFoilsResponse.verify|verify} messages.
                         * @param message GetSolarFoilsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.cigsdefects.IGetSolarFoilsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetSolarFoilsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetSolarFoilsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.cigsdefects.GetSolarFoilsResponse;

                        /**
                         * Decodes a GetSolarFoilsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetSolarFoilsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.cigsdefects.GetSolarFoilsResponse;

                        /**
                         * Verifies a GetSolarFoilsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetSolarFoilsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetSolarFoilsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.cigsdefects.GetSolarFoilsResponse;

                        /**
                         * Creates a plain object from a GetSolarFoilsResponse message. Also converts values to other types if specified.
                         * @param message GetSolarFoilsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.cigsdefects.GetSolarFoilsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetSolarFoilsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace generation. */
                namespace generation {

                    /** Represents a ScribingGenerator */
                    class ScribingGenerator extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new ScribingGenerator service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new ScribingGenerator service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ScribingGenerator;

                        /**
                         * Calls RunBatchScript.
                         * @param request RunBatchScriptReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and RunBatchScriptRes
                         */
                        public runBatchScript(request: at.spg.protobuf.scribingdb.generation.IRunBatchScriptReq, callback: at.spg.protobuf.scribingdb.generation.ScribingGenerator.RunBatchScriptCallback): void;

                        /**
                         * Calls RunBatchScript.
                         * @param request RunBatchScriptReq message or plain object
                         * @returns Promise
                         */
                        public runBatchScript(request: at.spg.protobuf.scribingdb.generation.IRunBatchScriptReq): Promise<at.spg.protobuf.scribingdb.generation.RunBatchScriptRes>;

                        /**
                         * Calls GenerateLaserGCode.
                         * @param request GenerateLaserGCodeReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and GenerateLaserGCodeRes
                         */
                        public generateLaserGCode(request: at.spg.protobuf.scribingdb.generation.IGenerateLaserGCodeReq, callback: at.spg.protobuf.scribingdb.generation.ScribingGenerator.GenerateLaserGCodeCallback): void;

                        /**
                         * Calls GenerateLaserGCode.
                         * @param request GenerateLaserGCodeReq message or plain object
                         * @returns Promise
                         */
                        public generateLaserGCode(request: at.spg.protobuf.scribingdb.generation.IGenerateLaserGCodeReq): Promise<at.spg.protobuf.scribingdb.generation.GenerateLaserGCodeRes>;
                    }

                    namespace ScribingGenerator {

                        /**
                         * Callback as used by {@link at.spg.protobuf.scribingdb.generation.ScribingGenerator#runBatchScript}.
                         * @param error Error, if any
                         * @param [response] RunBatchScriptRes
                         */
                        type RunBatchScriptCallback = (error: (Error|null), response?: at.spg.protobuf.scribingdb.generation.RunBatchScriptRes) => void;

                        /**
                         * Callback as used by {@link at.spg.protobuf.scribingdb.generation.ScribingGenerator#generateLaserGCode}.
                         * @param error Error, if any
                         * @param [response] GenerateLaserGCodeRes
                         */
                        type GenerateLaserGCodeCallback = (error: (Error|null), response?: at.spg.protobuf.scribingdb.generation.GenerateLaserGCodeRes) => void;
                    }

                    /** Properties of a RunBatchScriptReq. */
                    interface IRunBatchScriptReq {

                        /** RunBatchScriptReq code */
                        code?: (string|null);
                    }

                    /** Represents a RunBatchScriptReq. */
                    class RunBatchScriptReq implements IRunBatchScriptReq {

                        /**
                         * Constructs a new RunBatchScriptReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.generation.IRunBatchScriptReq);

                        /** RunBatchScriptReq code. */
                        public code: string;

                        /**
                         * Creates a new RunBatchScriptReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RunBatchScriptReq instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.generation.IRunBatchScriptReq): at.spg.protobuf.scribingdb.generation.RunBatchScriptReq;

                        /**
                         * Encodes the specified RunBatchScriptReq message. Does not implicitly {@link at.spg.protobuf.scribingdb.generation.RunBatchScriptReq.verify|verify} messages.
                         * @param message RunBatchScriptReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.generation.IRunBatchScriptReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RunBatchScriptReq message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.generation.RunBatchScriptReq.verify|verify} messages.
                         * @param message RunBatchScriptReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.generation.IRunBatchScriptReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RunBatchScriptReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RunBatchScriptReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.generation.RunBatchScriptReq;

                        /**
                         * Decodes a RunBatchScriptReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RunBatchScriptReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.generation.RunBatchScriptReq;

                        /**
                         * Verifies a RunBatchScriptReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RunBatchScriptReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RunBatchScriptReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.generation.RunBatchScriptReq;

                        /**
                         * Creates a plain object from a RunBatchScriptReq message. Also converts values to other types if specified.
                         * @param message RunBatchScriptReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.generation.RunBatchScriptReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RunBatchScriptReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a RunBatchScriptRes. */
                    interface IRunBatchScriptRes {

                        /** RunBatchScriptRes data */
                        data?: (at.spg.protobuf.scribingdb.batchfile.IFlatBatchData|null);

                        /** RunBatchScriptRes stdout */
                        stdout?: (string|null);

                        /** RunBatchScriptRes stderr */
                        stderr?: (string|null);
                    }

                    /** Represents a RunBatchScriptRes. */
                    class RunBatchScriptRes implements IRunBatchScriptRes {

                        /**
                         * Constructs a new RunBatchScriptRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.generation.IRunBatchScriptRes);

                        /** RunBatchScriptRes data. */
                        public data?: (at.spg.protobuf.scribingdb.batchfile.IFlatBatchData|null);

                        /** RunBatchScriptRes stdout. */
                        public stdout: string;

                        /** RunBatchScriptRes stderr. */
                        public stderr: string;

                        /**
                         * Creates a new RunBatchScriptRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RunBatchScriptRes instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.generation.IRunBatchScriptRes): at.spg.protobuf.scribingdb.generation.RunBatchScriptRes;

                        /**
                         * Encodes the specified RunBatchScriptRes message. Does not implicitly {@link at.spg.protobuf.scribingdb.generation.RunBatchScriptRes.verify|verify} messages.
                         * @param message RunBatchScriptRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.generation.IRunBatchScriptRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RunBatchScriptRes message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.generation.RunBatchScriptRes.verify|verify} messages.
                         * @param message RunBatchScriptRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.generation.IRunBatchScriptRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RunBatchScriptRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RunBatchScriptRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.generation.RunBatchScriptRes;

                        /**
                         * Decodes a RunBatchScriptRes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RunBatchScriptRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.generation.RunBatchScriptRes;

                        /**
                         * Verifies a RunBatchScriptRes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RunBatchScriptRes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RunBatchScriptRes
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.generation.RunBatchScriptRes;

                        /**
                         * Creates a plain object from a RunBatchScriptRes message. Also converts values to other types if specified.
                         * @param message RunBatchScriptRes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.generation.RunBatchScriptRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RunBatchScriptRes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a LaserSettings. */
                    interface ILaserSettings {

                        /** LaserSettings attenuation */
                        attenuation?: (number|null);

                        /** LaserSettings pulsePicker */
                        pulsePicker?: (number|null);

                        /** LaserSettings speed */
                        speed?: (number|null);

                        /** LaserSettings zOffset */
                        zOffset?: (number|null);
                    }

                    /** Represents a LaserSettings. */
                    class LaserSettings implements ILaserSettings {

                        /**
                         * Constructs a new LaserSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.generation.ILaserSettings);

                        /** LaserSettings attenuation. */
                        public attenuation: number;

                        /** LaserSettings pulsePicker. */
                        public pulsePicker: number;

                        /** LaserSettings speed. */
                        public speed: number;

                        /** LaserSettings zOffset. */
                        public zOffset: number;

                        /**
                         * Creates a new LaserSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LaserSettings instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.generation.ILaserSettings): at.spg.protobuf.scribingdb.generation.LaserSettings;

                        /**
                         * Encodes the specified LaserSettings message. Does not implicitly {@link at.spg.protobuf.scribingdb.generation.LaserSettings.verify|verify} messages.
                         * @param message LaserSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.generation.ILaserSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LaserSettings message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.generation.LaserSettings.verify|verify} messages.
                         * @param message LaserSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.generation.ILaserSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LaserSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LaserSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.generation.LaserSettings;

                        /**
                         * Decodes a LaserSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LaserSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.generation.LaserSettings;

                        /**
                         * Verifies a LaserSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LaserSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LaserSettings
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.generation.LaserSettings;

                        /**
                         * Creates a plain object from a LaserSettings message. Also converts values to other types if specified.
                         * @param message LaserSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.generation.LaserSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LaserSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GenerateLaserGCodeReq. */
                    interface IGenerateLaserGCodeReq {

                        /** GenerateLaserGCodeReq scribingObjects */
                        scribingObjects?: (at.spg.protobuf.scribingdb.batchfile.IScribingObject[]|null);

                        /** GenerateLaserGCodeReq settings */
                        settings?: ({ [k: string]: at.spg.protobuf.scribingdb.generation.ILaserSettings }|null);

                        /** GenerateLaserGCodeReq startX */
                        startX?: (number|null);

                        /** GenerateLaserGCodeReq startY */
                        startY?: (number|null);

                        /** GenerateLaserGCodeReq startZ */
                        startZ?: (number|null);

                        /** GenerateLaserGCodeReq centerInXy */
                        centerInXy?: (boolean|null);

                        /** GenerateLaserGCodeReq tool */
                        tool?: (string|null);
                    }

                    /** Represents a GenerateLaserGCodeReq. */
                    class GenerateLaserGCodeReq implements IGenerateLaserGCodeReq {

                        /**
                         * Constructs a new GenerateLaserGCodeReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.generation.IGenerateLaserGCodeReq);

                        /** GenerateLaserGCodeReq scribingObjects. */
                        public scribingObjects: at.spg.protobuf.scribingdb.batchfile.IScribingObject[];

                        /** GenerateLaserGCodeReq settings. */
                        public settings: { [k: string]: at.spg.protobuf.scribingdb.generation.ILaserSettings };

                        /** GenerateLaserGCodeReq startX. */
                        public startX: number;

                        /** GenerateLaserGCodeReq startY. */
                        public startY: number;

                        /** GenerateLaserGCodeReq startZ. */
                        public startZ: number;

                        /** GenerateLaserGCodeReq centerInXy. */
                        public centerInXy: boolean;

                        /** GenerateLaserGCodeReq tool. */
                        public tool: string;

                        /**
                         * Creates a new GenerateLaserGCodeReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GenerateLaserGCodeReq instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.generation.IGenerateLaserGCodeReq): at.spg.protobuf.scribingdb.generation.GenerateLaserGCodeReq;

                        /**
                         * Encodes the specified GenerateLaserGCodeReq message. Does not implicitly {@link at.spg.protobuf.scribingdb.generation.GenerateLaserGCodeReq.verify|verify} messages.
                         * @param message GenerateLaserGCodeReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.generation.IGenerateLaserGCodeReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GenerateLaserGCodeReq message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.generation.GenerateLaserGCodeReq.verify|verify} messages.
                         * @param message GenerateLaserGCodeReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.generation.IGenerateLaserGCodeReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GenerateLaserGCodeReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GenerateLaserGCodeReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.generation.GenerateLaserGCodeReq;

                        /**
                         * Decodes a GenerateLaserGCodeReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GenerateLaserGCodeReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.generation.GenerateLaserGCodeReq;

                        /**
                         * Verifies a GenerateLaserGCodeReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GenerateLaserGCodeReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GenerateLaserGCodeReq
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.generation.GenerateLaserGCodeReq;

                        /**
                         * Creates a plain object from a GenerateLaserGCodeReq message. Also converts values to other types if specified.
                         * @param message GenerateLaserGCodeReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.generation.GenerateLaserGCodeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GenerateLaserGCodeReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GenerateLaserGCodeRes. */
                    interface IGenerateLaserGCodeRes {

                        /** GenerateLaserGCodeRes gCode */
                        gCode?: (string|null);
                    }

                    /** Represents a GenerateLaserGCodeRes. */
                    class GenerateLaserGCodeRes implements IGenerateLaserGCodeRes {

                        /**
                         * Constructs a new GenerateLaserGCodeRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: at.spg.protobuf.scribingdb.generation.IGenerateLaserGCodeRes);

                        /** GenerateLaserGCodeRes gCode. */
                        public gCode: string;

                        /**
                         * Creates a new GenerateLaserGCodeRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GenerateLaserGCodeRes instance
                         */
                        public static create(properties?: at.spg.protobuf.scribingdb.generation.IGenerateLaserGCodeRes): at.spg.protobuf.scribingdb.generation.GenerateLaserGCodeRes;

                        /**
                         * Encodes the specified GenerateLaserGCodeRes message. Does not implicitly {@link at.spg.protobuf.scribingdb.generation.GenerateLaserGCodeRes.verify|verify} messages.
                         * @param message GenerateLaserGCodeRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: at.spg.protobuf.scribingdb.generation.IGenerateLaserGCodeRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GenerateLaserGCodeRes message, length delimited. Does not implicitly {@link at.spg.protobuf.scribingdb.generation.GenerateLaserGCodeRes.verify|verify} messages.
                         * @param message GenerateLaserGCodeRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: at.spg.protobuf.scribingdb.generation.IGenerateLaserGCodeRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GenerateLaserGCodeRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GenerateLaserGCodeRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): at.spg.protobuf.scribingdb.generation.GenerateLaserGCodeRes;

                        /**
                         * Decodes a GenerateLaserGCodeRes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GenerateLaserGCodeRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): at.spg.protobuf.scribingdb.generation.GenerateLaserGCodeRes;

                        /**
                         * Verifies a GenerateLaserGCodeRes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GenerateLaserGCodeRes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GenerateLaserGCodeRes
                         */
                        public static fromObject(object: { [k: string]: any }): at.spg.protobuf.scribingdb.generation.GenerateLaserGCodeRes;

                        /**
                         * Creates a plain object from a GenerateLaserGCodeRes message. Also converts values to other types if specified.
                         * @param message GenerateLaserGCodeRes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: at.spg.protobuf.scribingdb.generation.GenerateLaserGCodeRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GenerateLaserGCodeRes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
