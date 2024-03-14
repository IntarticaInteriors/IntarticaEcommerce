"use client"
import React, { useState, useEffect, useRef } from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const CommandSearch = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const commandRef = useRef(null);
  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (commandRef.current && !commandRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);   

  return (
    <div>
      <div className="relative w-96" ref={commandRef} >
        <Command className="rounded-lg border shadow-md" onClick={handleToggleExpand}>
          <CommandInput placeholder="Type a command or search..." />
          {isExpanded && (
            <CommandList className="mt-2 absolute top-full left-0 w-full z-50 bg-white">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <span>Launch</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator className="my-2" />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <span>Mail</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          )}
        </Command>
       
      </div>
    </div>
  );
};

export default CommandSearch;
