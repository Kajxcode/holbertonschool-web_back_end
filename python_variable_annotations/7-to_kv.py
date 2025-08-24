#!/usr/bin/env python3
"""
This module defines a function
"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]
    """takes a mixed list of int and float and returns tuples"""
    return (k, float(v ** 2))
